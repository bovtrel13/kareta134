var LanderJS = (function() {

	/* Статические объекты */
	var
	LANDER = {},
	TRANSLATE = {
		ru: {sending: 'Отправка...'},
		en: {sending: 'Sending...'},
		kz: {sending: 'Жіберу...'},
		cn: {sending: '发送'}
	},
	GLOBAL_LANG
	;

	/* Проверка наличия jQuery на странице */
	LANDER.check = function() {
		if (typeof jQuery == 'undefined') {
			LANDER.loadJS( 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js', LANDER.check );
			return;
		}

		LANDER.init();
	};

	/* Инициализация */
	LANDER.init = function() {
		$(document).ready(function(){
			LANDER.run();
		});
	}

	/* Запуск хелперов */
	LANDER.run = function() {
		GLOBAL_LANG = $('html').attr('lang') || 'ru';

		LANDER.placeholder();       /* Плейсхолдер */
		LANDER.form();              /* Общие обработчики форм */
		LANDER.inputMasks();        /* Маска телефона */
		LANDER.formValidation();    /* Валидация основных форм */
	};

	/* Плейсхолдеры для IE 9 и ниже */
	LANDER.placeholder = function(){
		(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if((/msie/i).test(navigator.userAgent)&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});(/msie/i).test(navigator.userAgent)&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);

		$('input[placeholder], textarea[placeholder]').placeholder();
	};


	/* Функция кодирования кириллицы в action форм для IE */
	LANDER.encodeFormAction = function($form) {
		/* Кодирование делаем только для IE <= 11 */
		if ( !(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0) ) return;

		try{
			var
			goodaction = '',
			clearquery = $form.attr('action').split('?'),
			superquery = clearquery[1],
			splitter = superquery.split('&')
			;

			splitter.forEach(function(entry) {
				var keys = entry.split('=');
				if (!keys[0]) return;
				if (keys[0] !== 'r') {keys[1] = encodeURIComponent(keys[1]);}
				goodaction = goodaction+keys[0]+'='+keys[1]+'&';
			});
			$form.attr('action', clearquery[0]+'?'+goodaction);
		}catch(e){}
	};

	/* Общие обработчики форм */
	LANDER.form = function() {
		$('form:not(.nolander)').on('submit', function () {


		})
		.each(function () {
			var $form = $(this);
			if ($form.data('inited') == 'inited') return;

			/* Кодирование кириллицы в action форм для IE */
			LANDER.encodeFormAction($form);

			$form.data('inited', 'inited');
		})
		/* После перезагрузки страницы у элементов форм убираем атрибут disabled="", установленный ранее через .attr(), и не трогаем те, которые по умолчанию имеют явно указанный атрибут disabled="true" */
		.find(':disabled:not([disabled="true"])').removeAttr('disabled')
		;


	};

	/* Автоматическая подстановка маски под номер телефона */
	LANDER.inputMasks = function() {
		if (typeof $.fn.inputmask == 'undefined') {
			LANDER.loadJS( 'https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.3/jquery.inputmask.bundle.min.js', function(){ /* Плагин маски со встроенным расширением для телефонов */
				LANDER.loadJS( 'https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.3/phone-codes/phone.js', function(){ /* Дефолтные маски телефонов плагина */
					LANDER.loadJS( 'js/phone-addon.js', LANDER.inputMasks ); /* Дополнительные собственные маски телефонов */
				});
			});
			return;
		}

		$('').each(function() {
			/* Фикс для бага inputmask на Android (после ввода первой цифры номера каретка не смещается вправо) https://github.com/RobinHerbots/jquery.inputmask/issues/1196 */
			if ( navigator.userAgent.match(/Android/i) && $(this).val() == '' ) {
				$(this).val('7');
			}
			$(this).inputmask({
				alias: 'phone',
				url: 'js/phone-codes.json' /* Параметр url для лендов, на которых подключена старая версия inputmask */
			}).attr('data-inputmasks-inited', '');


		});
	};

	LANDER.formValidationMethod = function() {
		/* Дополнительный метод валидации имени */
		$.validator.addMethod('valname', function (value, element) {
			return this.optional(element) || /^[А-Яа-яЁёA-Za-z\s]{2,100}$/.test(value);
		}, 'Введите корректное имя');

		/* Дополнительный метод валидации e-mail */
		$.validator.addMethod('valemail', function (value, element) {
			return this.optional(element) || /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value);
		}, 'Введите корректный e-mail');

		/* Дополнительный метод валидации телефона на заполненность маски */
		$.validator.addMethod('valphone', function (value, element) {
			return this.optional(element) || $(element).inputmask('isComplete');
		}, 'Введите корректный телефон');

		/* Перевод валидации на русский язык */
		$.extend($.validator.messages, {
			required : 'Обязательное поле',
			remote   : 'Пожалуйста, введите правильное значение.',
			email    : 'Пожалуйста, введите корректный адрес E-mail.',
			number   : 'Пожалуйста, введите цифры.',
			maxlength: $.validator.format('Пожалуйста, введите не больше {0} символов.'),
			minlength: $.validator.format('Пожалуйста, введите не меньше {0} символов.')
		});
	};


	/* Поля формы */
	LANDER.formFields = function(form) {
		var fields = {};
		$(form).find('input,select,textarea').not('[type=submit]').each(function(){
			if($(this).attr('name') && $(this).attr('name') != 'radio')
				fields[$(this).attr('name')] = $(this).val();

			if($(this).attr('name') == 'radio' && $(this).prop("checked"))
				fields['radio'] = $(this).val();
		});

		return fields;
	};
	


	/* Валидация формы */
	LANDER.formValidation = function() {
		if (typeof $.validator == 'undefined') {
			LANDER.loadJS( 'http://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.14.0/jquery.validate.min.js', LANDER.formValidation );
			return;
		}

		LANDER.formValidationMethod();

		/* Валидация и аякс отправка форм */
		$('form').not('#mse2_form, .nolander').each(function(){
			var $form = $(this),
			lang = $form.attr('data-lang') || GLOBAL_LANG
			;
			var formID = $(this).attr('id'); // Получение ID формы
			var formNm = $('#' + formID);

			$form.validate({
				errorElement: "label",
				rules: {
					"name": {required: true, minlength: 2, maxlength: 50, valname: (lang != 'cn' ? true : false)},
					"phone": {required: true, minlength: 11, maxlength: 25, valphone: true},
					'question': {required: false, minlength: 2, maxlength: 200},
					'number':{required: true, number: true, min: 1}
				},
				/* Ajax отправка формы */
				submitHandler: function (form) {
						$.ajax({
							type: 'POST',
							url: '../sms.php', // Обработчик формы отправки
							data: formNm.serialize(),
							success: function (data) {
								// Вывод текста результата отправки в текущей форме
								if(data="OK") {
								swal("Спасибо!", "Ваша заявка принята", "success");		
								} else {
									swal({
									title: "Ошибка!",
									text: "К сожалению, отправка не удалась!",
									type: "error",
								});
								}
							}, error: function (data) {
								swal({
									title: "Ошибка!",
									text: "К сожалению, отправка не удалась!",
									type: "error",
								});
							}
						});
						/*_rc('send', 'order', {
							'name': $form.find('input[name=name]').val(),
							'phone': $form.find('input[name=phone]').val(),
							'customerComment' : $(this).find('input[name=customerComment]').val(),
							'orderMethod': 'landing-page',
							'callback': function(success, response) {
								if(success){
									swal("Спасибо!", "Ваша заявка принята", "success");
									console.log(response.id);
									ga('send', 'event', 'Order', 'Form', response.id);
									yaCounter48901034.reachGoal('orderSubmit');
                				} else {
                                    swal({
                                        title: "Ошибка!",
                                        text: "К сожалению, отправка не удалась!",
                                        type: "error",
                                    });
                                }
							}
						});*/
						return false;
				}
			})
		});
};

/* Подгрузка скрипта и выполнение функции после его загрузки  */
LANDER.loadJS = function(js_file, js_function) {
	var script = document.createElement('script');
	script.src = js_file;
	document.body.appendChild(script);
	script.onload = function () {
		if (!this.executed) { /* Выполнится только один раз*/
			this.executed = true;
			if (js_function) js_function.call();
		}
	};
	script.onreadystatechange = function () {
		var self = this; /* Сохранить "this" для onload */
		if (this.readyState == "complete" || this.readyState == "loaded") {
			setTimeout(function () {
				self.onload()
			}, 0);
		}
	};
};

LANDER.check();

return LANDER;
})();
