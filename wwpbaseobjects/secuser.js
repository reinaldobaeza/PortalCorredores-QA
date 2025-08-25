/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:48.42
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secuser', false, function () {
   this.ServerClass =  "wwpbaseobjects.secuser" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV7SecUserId=gx.fn.getIntegerValue("vSECUSERID",'.') ;
      this.AV16Insert_SecUserPadre=gx.fn.getIntegerValue("vINSERT_SECUSERPADRE",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV18Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV11TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
   this.Valid_Secuserid=function()
   {
      return this.validCliEvt("Valid_Secuserid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECUSERID");
         this.AnyError  = 0;

         this.refreshOutputs([{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Valid_Secusername=function()
   {
      return this.validCliEvt("Valid_Secusername", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECUSERNAME");
         this.AnyError  = 0;

         this.refreshOutputs([{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Valid_Secuserpadre=function()
   {
      return this.validSrvEvt("Valid_Secuserpadre", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Secusermail=function()
   {
      return this.validCliEvt("Valid_Secusermail", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECUSERMAIL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.A216SecUserMail, "^((\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)|(\\s*))$") || ((''===this.A216SecUserMail)) ) )
         {
            try {
               gxballoon.setError("El valor de Sec User Mail no coincide con el patrón especificado");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Valid_Secusertokenfecha=function()
   {
      return this.validCliEvt("Valid_Secusertokenfecha", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECUSERTOKENFECHA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A219SecUserTokenFecha)===0) || new gx.date.gxdate( this.A219SecUserTokenFecha ).compare( gx.date.ymdhmstot( 1753, 1, 1, 0, 0, 0) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Sec User Token Fecha fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.e120c2_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e130c15_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140c15_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58];
   this.GXLastCtrlId =58;
   this.DVPANEL_TABLEATTRIBUTESContainer = gx.uc.getNew(this, 18, 0, "BootstrapPanel", "DVPANEL_TABLEATTRIBUTESContainer", "Dvpanel_tableattributes", "DVPANEL_TABLEATTRIBUTES");
   var DVPANEL_TABLEATTRIBUTESContainer = this.DVPANEL_TABLEATTRIBUTESContainer;
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Class", "Class", "", "char");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Enabled", "Enabled", true, "boolean");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Width", "Width", "100%", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Height", "Height", "100", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoWidth", "Autowidth", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoHeight", "Autoheight", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Cls", "Cls", "DVBootstrapResponsivePanel", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("ShowHeader", "Showheader", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Title", "Title", "Información General", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Collapsible", "Collapsible", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Collapsed", "Collapsed", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("ShowCollapseIcon", "Showcollapseicon", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("IconPosition", "Iconposition", "Right", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoScroll", "Autoscroll", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Visible", "Visible", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   DVPANEL_TABLEATTRIBUTESContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(DVPANEL_TABLEATTRIBUTESContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TEXTBLOCKTITLE", format:0,grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TABLECONTENT",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"TABLEATTRIBUTES",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id:25 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secusername,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERNAME",gxz:"Z149SecUserName",gxold:"O149SecUserName",gxvar:"A149SecUserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A149SecUserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z149SecUserName=Value},v2c:function(){gx.fn.setControlValue("SECUSERNAME",gx.O.A149SecUserName,0)},c2v:function(){if(this.val()!==undefined)gx.O.A149SecUserName=this.val()},val:function(){return gx.fn.getControlValue("SECUSERNAME")},nac:gx.falseFn};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERPASSWORD",gxz:"Z150SecUserPassword",gxold:"O150SecUserPassword",gxvar:"A150SecUserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A150SecUserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z150SecUserPassword=Value},v2c:function(){gx.fn.setControlValue("SECUSERPASSWORD",gx.O.A150SecUserPassword,0)},c2v:function(){if(this.val()!==undefined)gx.O.A150SecUserPassword=this.val()},val:function(){return gx.fn.getControlValue("SECUSERPASSWORD")},nac:gx.falseFn};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERDESCRIPCION",gxz:"Z151SecUserDescripcion",gxold:"O151SecUserDescripcion",gxvar:"A151SecUserDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A151SecUserDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z151SecUserDescripcion=Value},v2c:function(){gx.fn.setControlValue("SECUSERDESCRIPCION",gx.O.A151SecUserDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A151SecUserDescripcion=this.val()},val:function(){return gx.fn.getControlValue("SECUSERDESCRIPCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERCARGAPOLIZAS",gxz:"Z166SecUserCargaPolizas",gxold:"O166SecUserCargaPolizas",gxvar:"A166SecUserCargaPolizas",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A166SecUserCargaPolizas=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z166SecUserCargaPolizas=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("SECUSERCARGAPOLIZAS",gx.O.A166SecUserCargaPolizas,true)},c2v:function(){if(this.val()!==undefined)gx.O.A166SecUserCargaPolizas=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("SECUSERCARGAPOLIZAS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"BTNTRN_ENTER",grid:0,evt:"e130c15_client",std:"ENTER"};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"BTNTRN_CANCEL",grid:0,evt:"e140c15_client"};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"BTNTRN_DELETE",grid:0,evt:"e150c15_client",std:"DELETE"};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Secuserid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERID",gxz:"Z141SecUserId",gxold:"O141SecUserId",gxvar:"A141SecUserId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A141SecUserId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z141SecUserId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECUSERID",gx.O.A141SecUserId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A141SecUserId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECUSERID",'.')},nac:gx.falseFn};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secuserpadre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERPADRE",gxz:"Z152SecUserPadre",gxold:"O152SecUserPadre",gxvar:"A152SecUserPadre",ucs:[],op:[],ip:[54],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A152SecUserPadre=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z152SecUserPadre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECUSERPADRE",gx.O.A152SecUserPadre,0)},c2v:function(){if(this.val()!==undefined)gx.O.A152SecUserPadre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECUSERPADRE",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV16Insert_SecUserPadre))}};
   GXValidFnc[55]={ id:55 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secusermail,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERMAIL",gxz:"Z216SecUserMail",gxold:"O216SecUserMail",gxvar:"A216SecUserMail",ucs:[],op:[55],ip:[55],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A216SecUserMail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z216SecUserMail=Value},v2c:function(){gx.fn.setControlValue("SECUSERMAIL",gx.O.A216SecUserMail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A216SecUserMail=this.val()},val:function(){return gx.fn.getControlValue("SECUSERMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
      gx.fn.setCtrlProperty("SECUSERMAIL","Link", (!gx.fn.getCtrlProperty("SECUSERMAIL","Enabled") ? "mailto:"+this.A216SecUserMail : "") );
   });
   GXValidFnc[56]={ id:56 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERKEY",gxz:"Z217SecUserKey",gxold:"O217SecUserKey",gxvar:"A217SecUserKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A217SecUserKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z217SecUserKey=Value},v2c:function(){gx.fn.setControlValue("SECUSERKEY",gx.O.A217SecUserKey,0)},c2v:function(){if(this.val()!==undefined)gx.O.A217SecUserKey=this.val()},val:function(){return gx.fn.getControlValue("SECUSERKEY")},nac:gx.falseFn};
   GXValidFnc[57]={ id:57 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERTOKEN",gxz:"Z218SecUserToken",gxold:"O218SecUserToken",gxvar:"A218SecUserToken",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A218SecUserToken=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z218SecUserToken=Value},v2c:function(){gx.fn.setControlValue("SECUSERTOKEN",gx.O.A218SecUserToken,0)},c2v:function(){if(this.val()!==undefined)gx.O.A218SecUserToken=this.val()},val:function(){return gx.fn.getControlValue("SECUSERTOKEN")},nac:gx.falseFn};
   GXValidFnc[58]={ id:58 ,lvl:0,type:"dtime",len:10,dec:12,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secusertokenfecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERTOKENFECHA",gxz:"Z219SecUserTokenFecha",gxold:"O219SecUserTokenFecha",gxvar:"A219SecUserTokenFecha",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99.999",dec:12},ucs:[],op:[58],ip:[58],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A219SecUserTokenFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z219SecUserTokenFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SECUSERTOKENFECHA",gx.O.A219SecUserTokenFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A219SecUserTokenFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SECUSERTOKENFECHA")},nac:gx.falseFn};
   this.A149SecUserName = "" ;
   this.Z149SecUserName = "" ;
   this.O149SecUserName = "" ;
   this.A150SecUserPassword = "" ;
   this.Z150SecUserPassword = "" ;
   this.O150SecUserPassword = "" ;
   this.A151SecUserDescripcion = "" ;
   this.Z151SecUserDescripcion = "" ;
   this.O151SecUserDescripcion = "" ;
   this.A166SecUserCargaPolizas = false ;
   this.Z166SecUserCargaPolizas = false ;
   this.O166SecUserCargaPolizas = false ;
   this.A141SecUserId = 0 ;
   this.Z141SecUserId = 0 ;
   this.O141SecUserId = 0 ;
   this.A152SecUserPadre = 0 ;
   this.Z152SecUserPadre = 0 ;
   this.O152SecUserPadre = 0 ;
   this.A216SecUserMail = "" ;
   this.Z216SecUserMail = "" ;
   this.O216SecUserMail = "" ;
   this.A217SecUserKey = "" ;
   this.Z217SecUserKey = "" ;
   this.O217SecUserKey = "" ;
   this.A218SecUserToken = "" ;
   this.Z218SecUserToken = "" ;
   this.O218SecUserToken = "" ;
   this.A219SecUserTokenFecha = gx.date.nullDate() ;
   this.Z219SecUserTokenFecha = gx.date.nullDate() ;
   this.O219SecUserTokenFecha = gx.date.nullDate() ;
   this.AV15WWPContext = {UserId:0,UserName:"",UserDescripcion:""} ;
   this.AV9IsAuthorized = false ;
   this.AV18Pgmname = "" ;
   this.AV11TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV19GXV1 = 0 ;
   this.AV16Insert_SecUserPadre = 0 ;
   this.AV17TrnContextAtt = {AttributeName:"",AttributeValue:""} ;
   this.AV7SecUserId = 0 ;
   this.AV12WebSession = {} ;
   this.A141SecUserId = 0 ;
   this.A152SecUserPadre = 0 ;
   this.Gx_BScreen = 0 ;
   this.A149SecUserName = "" ;
   this.A150SecUserPassword = "" ;
   this.A151SecUserDescripcion = "" ;
   this.A166SecUserCargaPolizas = false ;
   this.A216SecUserMail = "" ;
   this.A217SecUserKey = "" ;
   this.A218SecUserToken = "" ;
   this.A219SecUserTokenFecha = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e120c2_client": ["AFTER TRN", true] ,"e130c15_client": ["ENTER", true] ,"e140c15_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7SecUserId',fld:'vSECUSERID',pic:'ZZZ9',hsh:true},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV11TrnContext',fld:'vTRNCONTEXT',pic:'',hsh:true},{av:'AV7SecUserId',fld:'vSECUSERID',pic:'ZZZ9',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["START"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV18Pgmname',fld:'vPGMNAME',pic:''},{ctrl:'FORM',prop:'Caption'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'AV15WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV9IsAuthorized',fld:'vISAUTHORIZED',pic:''},{av:'AV11TrnContext',fld:'vTRNCONTEXT',pic:'',hsh:true},{av:'AV19GXV1',fld:'vGXV1',pic:'99999999'},{av:'AV17TrnContextAtt',fld:'vTRNCONTEXTATT',pic:''},{av:'AV16Insert_SecUserPadre',fld:'vINSERT_SECUSERPADRE',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("SECUSERID","Visible")',ctrl:'SECUSERID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERPADRE","Visible")',ctrl:'SECUSERPADRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCKTITLE","Caption")',ctrl:'TEXTBLOCKTITLE',prop:'Caption'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV11TrnContext',fld:'vTRNCONTEXT',pic:'',hsh:true},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["VALID_SECUSERNAME"] = [[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["VALID_SECUSERID"] = [[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["VALID_SECUSERPADRE"] = [[{av:'A152SecUserPadre',fld:'SECUSERPADRE',pic:'ZZZ9'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["VALID_SECUSERMAIL"] = [[{av:'A216SecUserMail',fld:'SECUSERMAIL',pic:''},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A216SecUserMail',fld:'SECUSERMAIL',pic:''},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["VALID_SECUSERTOKENFECHA"] = [[{av:'A219SecUserTokenFecha',fld:'SECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A219SecUserTokenFecha',fld:'SECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV7SecUserId", "vSECUSERID", 0, "int", 4, 0);
   this.setVCMap("AV16Insert_SecUserPadre", "vINSERT_SECUSERPADRE", 0, "int", 4, 0);
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int", 1, 0);
   this.setVCMap("AV18Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV11TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secuser);});
