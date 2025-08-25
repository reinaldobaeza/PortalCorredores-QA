function UCCheckStrength($)
{
	  
	  
	  
	  
	  
	  

	var template = '<style>.Short {    width: 100%;    margin-top: 5px;    height: 3px;    color: #dc3545;    font-weight: 500;    font-size: 12px;}.Weak {    width: 100%;    margin-top: 5px;    height: 3px;    color: #ffc107;    font-weight: 500;    font-size: 12px;}.Good {    width: 100%;    margin-top: 5px;    height: 3px;    color: #28a745;    font-weight: 500;    font-size: 12px;}.Strong {    width: 100%;    margin-top: 5px;    height: 3px;    color: #d39e00;    font-weight: 500;    font-size: 12px;}</style><script>$(document).ready(function () {    $(\'#{{InputPassword}}\').keyup(function () {		var pass = $(\'#{{InputPassword}}\').val();		//Fuente: https://www.iteramos.com/pregunta/35695/eliminar-todos-los-espacios-en-blanco-del-texto;		pass = pass.replace(/ /g,\'\');				$(\'#{{InputPassword}}\').val(pass);        $(\'#{{strengthMessage}}\').html(checkStrength(pass))    })    function checkStrength(password) {		var icon = \'<span style="font-size: 1.5em; color: Green;">  <i class="fas fa-check-circle"></i></span>\';		var icon_white = \'<span style="font-size: 1.5em; color: White;">  <i class="fas fa-check-circle"></i></span>\';        var strength = 0        if (password.length < 6) {            $(\'#{{strengthMessage}}\').removeClass()            $(\'#{{strengthMessage}}\').addClass(\'Short\')			var mensaje1 = $(\'#{{Restriccion1}}\').html();			mensaje1 = mensaje1.replace(icon, "" );			mensaje1 = mensaje1.replace(icon_white, "" );			$(\'#{{Restriccion1}}\').html(icon_white + mensaje1);						mensaje1 = $(\'#{{Restriccion2}}\').html();			mensaje1 = mensaje1.replace(icon, "" );			mensaje1 = mensaje1.replace(icon_white, "" );			$(\'#{{Restriccion2}}\').html(icon_white + mensaje1);						mensaje1 = $(\'#{{Restriccion3}}\').html();			mensaje1 = mensaje1.replace(icon, "" );			mensaje1 = mensaje1.replace(icon_white, "" );			$(\'#{{Restriccion3}}\').html(icon_white + mensaje1);			            return \'Muy corta\'        }        if (password.length > 7) {			strength += 1			var mensaje1 = $(\'#{{Restriccion1}}\').html();			mensaje1 = mensaje1.replace(icon, "" );			mensaje1 = mensaje1.replace(icon_white, "" );						$(\'#{{Restriccion1}}\').html(icon + mensaje1)		}        // If password contains both lower and uppercase characters, increase strength value.        //if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) 		if (password.match(/([A-Z])/)) 		{			strength += 1			var mensaje = $(\'#{{Restriccion2}}\').html();			mensaje = mensaje.replace(icon, "" );			mensaje = mensaje.replace(icon_white, "" );						$(\'#{{Restriccion2}}\').html(icon + mensaje)		}		else		{			var mensaje = $(\'#{{Restriccion2}}\').html();			mensaje = mensaje.replace(icon, "" );			mensaje = mensaje.replace(icon_white, "" );			$(\'#{{Restriccion2}}\').html(icon_white + mensaje)		}        // If it has numbers and characters, increase strength value.        //if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1        // If it has one special character, increase strength value.        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/) || password.includes("@"))         {			strength += 1			var mensaje = $(\'#{{Restriccion3}}\').html();			mensaje = mensaje.replace(icon, "" );			mensaje = mensaje.replace(icon_white, "" );						$(\'#{{Restriccion3}}\').html(icon + mensaje)		}		else		{			var mensaje = $(\'#{{Restriccion3}}\').html();			mensaje = mensaje.replace(icon, "" );			mensaje = mensaje.replace(icon_white, "" );console.log("NO special character")			$(\'#{{Restriccion3}}\').html(icon_white + mensaje)		}		// If it has two special characters, increase strength value.        //if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1		        // Calculated strength value, we can return messages        // If value is less than 2        if (strength < 2) {            $(\'#{{strengthMessage}}\').removeClass()            $(\'#{{strengthMessage}}\').addClass(\'Weak\')			$(\'#{{CumplePassword}}\').val(0);			            return \'Débil\'	    } else if (strength == 2) {            $(\'#{{strengthMessage}}\').removeClass()            $(\'#{{strengthMessage}}\').addClass(\'Good\')			$(\'#{{CumplePassword}}\').val(0);            return \'Buena\'	    } else {            $(\'#{{strengthMessage}}\').removeClass()            $(\'#{{strengthMessage}}\').addClass(\'Strong\')			$(\'#{{CumplePassword}}\').val(1);            return \'Fuerte\'        }    }});</script>';
	Mustache.parse(template);
	var $container;
	this.show = function()
	{
			$container = $(this.getContainerControl());

			// Raise before show scripts


			//if (this.IsPostBack)
				this.setHtml(Mustache.render(template, this));
			this.renderChildContainers();



			this.toggleVisibility();

			// Raise after show scripts

	}

	this.Scripts = [  ];




	this.toggleVisibility = function () {
		if (this.Visible) {
			$container.show();
		}
		else {
			$container.hide();
		}
	};

	var childContainers = {};
	this.renderChildContainers = function () {
		$container
			.find("[data-slot][data-parent='" + this.ContainerName + "']")
			.each((function (i, slot) {
				var $slot = $(slot),
					slotName = $slot.attr('data-slot'),
					slotContentEl;

				slotContentEl = childContainers[slotName];
				if (!slotContentEl) {				
					slotContentEl = this.getChildContainer(this.ControlName + '_' + slotName)
					childContainers[slotName] = slotContentEl;
					slotContentEl.parentNode.removeChild(slotContentEl);
				}
				$slot.append(slotContentEl);
				$(slotContentEl).show();
			}).closure(this));
	};

}