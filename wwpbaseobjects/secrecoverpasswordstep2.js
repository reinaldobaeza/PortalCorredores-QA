/*!   GeneXus C# 16_0_10-142546 on 9/6/2024 13:7:24.11
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secrecoverpasswordstep2', false, function () {
   this.ServerClass =  "wwpbaseobjects.secrecoverpasswordstep2" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV18SecUserId=gx.fn.getIntegerValue("vSECUSERID",'.') ;
      this.AV14KeyToChangePassword=gx.fn.getControlValue("vKEYTOCHANGEPASSWORD") ;
   };
   this.s113_client=function()
   {
      this.TIMERContainer.Enabled =  true  ;
      gx.fn.setCtrlProperty("TABLEERROR","Visible", true );
      gx.fn.setCtrlProperty("BTNCONFIRMAR","Visible", false );
      gx.fn.setCtrlProperty("TBL_DATOS","Visible", false );
      gx.fn.setCtrlProperty("vUSERPASSWORDNEW","Visible", false );
      gx.fn.setCtrlProperty("vUSERPASSWORDNEWCONF","Visible", false );
      this.addMessage("Error : Link caducado.");
   };
   this.e154c1_client=function()
   {
      this.clearMessages();
      this.call("login.aspx", []);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e164c1_client=function()
   {
      this.clearMessages();
      this.call("login.aspx", []);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e124c2_client=function()
   {
      return this.executeServerEvent("'DOCONFIRMAR'", false, null, false, false);
   };
   this.e134c2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e174c2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,24,25,26,27,28,29,30,31,32,35,38,41,42,43,44,45,46,47,48,49,50,52,53];
   this.GXLastCtrlId =53;
   this.TIMERContainer = gx.uc.getNew(this, 54, 28, "Timer", "TIMERContainer", "Timer", "TIMER");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setDynProp("Interval", "Interval", 2000, "num");
   TIMERContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   TIMERContainer.addEventHandler("Elapsed", this.e164c1_client);
   this.setUserControl(TIMERContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLECONTENT",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"HEADERORIGINAL",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TABLELOGIN",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"SIGNIN", format:0,grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"UNNAMEDTABLE1",grid:0};
   GXValidFnc[24]={ id: 24, fld:"TBL_DATOS",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV7UserPasswordNew",gxold:"OV7UserPasswordNew",gxvar:"AV7UserPasswordNew",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV7UserPasswordNew=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV7UserPasswordNew=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV7UserPasswordNew,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV7UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV8UserPasswordNewConf",gxold:"OV8UserPasswordNewConf",gxvar:"AV8UserPasswordNewConf",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV8UserPasswordNewConf=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8UserPasswordNewConf=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV8UserPasswordNewConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV8UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={ id: 35, fld:"UNNAMEDSECTION2",grid:0};
   GXValidFnc[38]={ id: 38, fld:"UNNAMEDSECTION3",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"BTNCONFIRMAR",grid:0,evt:"e124c2_client"};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"BTNCANCELAR",grid:0,evt:"e154c1_client"};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"TABLEERROR",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   this.AV7UserPasswordNew = "" ;
   this.ZV7UserPasswordNew = "" ;
   this.OV7UserPasswordNew = "" ;
   this.AV8UserPasswordNewConf = "" ;
   this.ZV8UserPasswordNewConf = "" ;
   this.OV8UserPasswordNewConf = "" ;
   this.AV7UserPasswordNew = "" ;
   this.AV8UserPasswordNewConf = "" ;
   this.AV14KeyToChangePassword = "" ;
   this.A218SecUserToken = "" ;
   this.A219SecUserTokenFecha = gx.date.nullDate() ;
   this.A141SecUserId = 0 ;
   this.AV18SecUserId = 0 ;
   this.Events = {"e124c2_client": ["'DOCONFIRMAR'", true] ,"e134c2_client": ["ENTER", true] ,"e174c2_client": ["CANCEL", true] ,"e154c1_client": ["'DOCANCELAR'", false] ,"e164c1_client": ["TIMER.ELAPSED", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV18SecUserId',fld:'vSECUSERID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["START"] = [[{av:'A218SecUserToken',fld:'SECUSERTOKEN',pic:''},{av:'AV14KeyToChangePassword',fld:'vKEYTOCHANGEPASSWORD',pic:''},{av:'A219SecUserTokenFecha',fld:'SECUSERTOKENFECHA',pic:'99/99/9999 99:99:99.999'},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'}],[{av:'gx.fn.getCtrlProperty("TABLEERROR","Visible")',ctrl:'TABLEERROR',prop:'Visible'},{av:'this.TIMERContainer.Interval',ctrl:'TIMER',prop:'Interval'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV18SecUserId',fld:'vSECUSERID',pic:'ZZZ9',hsh:true},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBL_DATOS","Visible")',ctrl:'TBL_DATOS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEW","Visible")',ctrl:'vUSERPASSWORDNEW',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEWCONF","Visible")',ctrl:'vUSERPASSWORDNEWCONF',prop:'Visible'}]];
   this.EvtParms["'DOCONFIRMAR'"] = [[{av:'AV7UserPasswordNew',fld:'vUSERPASSWORDNEW',pic:''},{av:'AV8UserPasswordNewConf',fld:'vUSERPASSWORDNEWCONF',pic:''},{av:'AV18SecUserId',fld:'vSECUSERID',pic:'ZZZ9',hsh:true}],[{av:'gx.fn.getCtrlProperty("TABLEERROR","Visible")',ctrl:'TABLEERROR',prop:'Visible'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'}]];
   this.EvtParms["'DOCANCELAR'"] = [[],[]];
   this.EvtParms["TIMER.ELAPSED"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV7UserPasswordNew',fld:'vUSERPASSWORDNEW',pic:''},{av:'AV8UserPasswordNewConf',fld:'vUSERPASSWORDNEWCONF',pic:''},{av:'AV18SecUserId',fld:'vSECUSERID',pic:'ZZZ9',hsh:true}],[{av:'gx.fn.getCtrlProperty("TABLEERROR","Visible")',ctrl:'TABLEERROR',prop:'Visible'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'}]];
   this.setVCMap("AV18SecUserId", "vSECUSERID", 0, "int", 4, 0);
   this.setVCMap("AV14KeyToChangePassword", "vKEYTOCHANGEPASSWORD", 0, "svchar", 100, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secrecoverpasswordstep2);});
