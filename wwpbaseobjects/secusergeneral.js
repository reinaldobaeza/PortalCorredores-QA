/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:48.9
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secusergeneral', true, function (CmpContext) {
   this.ServerClass =  "wwpbaseobjects.secusergeneral" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
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
   this.e11381_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secuser.aspx", ["UPD", this.A141SecUserId]);
      this.refreshOutputs([{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e12381_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secuser.aspx", ["DLT", this.A141SecUserId]);
      this.refreshOutputs([{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e13381_client=function()
   {
      this.clearMessages();
      this.call("wwpbaseobjects.secusersecuserroleassociation.aspx", [this.A141SecUserId]);
      this.refreshOutputs([{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e16382_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17382_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47];
   this.GXLastCtrlId =47;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLE",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id:14 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERNAME",gxz:"Z149SecUserName",gxold:"O149SecUserName",gxvar:"A149SecUserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A149SecUserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z149SecUserName=Value},v2c:function(){gx.fn.setControlValue("SECUSERNAME",gx.O.A149SecUserName,0)},c2v:function(){if(this.val()!==undefined)gx.O.A149SecUserName=this.val()},val:function(){return gx.fn.getControlValue("SECUSERNAME")},nac:gx.falseFn};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,isPwd:true,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERPASSWORD",gxz:"Z150SecUserPassword",gxold:"O150SecUserPassword",gxvar:"A150SecUserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A150SecUserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z150SecUserPassword=Value},v2c:function(){gx.fn.setControlValue("SECUSERPASSWORD",gx.O.A150SecUserPassword,0)},c2v:function(){if(this.val()!==undefined)gx.O.A150SecUserPassword=this.val()},val:function(){return gx.fn.getControlValue("SECUSERPASSWORD")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERDESCRIPCION",gxz:"Z151SecUserDescripcion",gxold:"O151SecUserDescripcion",gxvar:"A151SecUserDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A151SecUserDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z151SecUserDescripcion=Value},v2c:function(){gx.fn.setControlValue("SECUSERDESCRIPCION",gx.O.A151SecUserDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A151SecUserDescripcion=this.val()},val:function(){return gx.fn.getControlValue("SECUSERDESCRIPCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERCARGAPOLIZAS",gxz:"Z166SecUserCargaPolizas",gxold:"O166SecUserCargaPolizas",gxvar:"A166SecUserCargaPolizas",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A166SecUserCargaPolizas=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z166SecUserCargaPolizas=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("SECUSERCARGAPOLIZAS",gx.O.A166SecUserCargaPolizas,true)},c2v:function(){if(this.val()!==undefined)gx.O.A166SecUserCargaPolizas=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("SECUSERCARGAPOLIZAS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"BTNUPDATE",grid:0,evt:"e11381_client"};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"BTNDELETE",grid:0,evt:"e12381_client"};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"BTNUAASSOCIATEROLES",grid:0,evt:"e13381_client"};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[42]={ id:42 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Secuserid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERID",gxz:"Z141SecUserId",gxold:"O141SecUserId",gxvar:"A141SecUserId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A141SecUserId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z141SecUserId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECUSERID",gx.O.A141SecUserId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A141SecUserId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECUSERID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERPADRE",gxz:"Z152SecUserPadre",gxold:"O152SecUserPadre",gxvar:"A152SecUserPadre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A152SecUserPadre=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z152SecUserPadre=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECUSERPADRE",gx.O.A152SecUserPadre,0)},c2v:function(){if(this.val()!==undefined)gx.O.A152SecUserPadre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECUSERPADRE",'.')},nac:gx.falseFn};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERMAIL",gxz:"Z216SecUserMail",gxold:"O216SecUserMail",gxvar:"A216SecUserMail",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A216SecUserMail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z216SecUserMail=Value},v2c:function(){gx.fn.setControlValue("SECUSERMAIL",gx.O.A216SecUserMail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A216SecUserMail=this.val()},val:function(){return gx.fn.getControlValue("SECUSERMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
      gx.fn.setCtrlProperty("SECUSERMAIL","Link", (!gx.fn.getCtrlProperty("SECUSERMAIL","Enabled") ? "mailto:"+this.A216SecUserMail : "") );
   });
   GXValidFnc[45]={ id:45 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERKEY",gxz:"Z217SecUserKey",gxold:"O217SecUserKey",gxvar:"A217SecUserKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A217SecUserKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z217SecUserKey=Value},v2c:function(){gx.fn.setControlValue("SECUSERKEY",gx.O.A217SecUserKey,0)},c2v:function(){if(this.val()!==undefined)gx.O.A217SecUserKey=this.val()},val:function(){return gx.fn.getControlValue("SECUSERKEY")},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERTOKEN",gxz:"Z218SecUserToken",gxold:"O218SecUserToken",gxvar:"A218SecUserToken",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A218SecUserToken=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z218SecUserToken=Value},v2c:function(){gx.fn.setControlValue("SECUSERTOKEN",gx.O.A218SecUserToken,0)},c2v:function(){if(this.val()!==undefined)gx.O.A218SecUserToken=this.val()},val:function(){return gx.fn.getControlValue("SECUSERTOKEN")},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:0,type:"dtime",len:10,dec:12,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERTOKENFECHA",gxz:"Z219SecUserTokenFecha",gxold:"O219SecUserTokenFecha",gxvar:"A219SecUserTokenFecha",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99:99.999",dec:12},ucs:[],op:[],ip:[],
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
   this.A149SecUserName = "" ;
   this.A150SecUserPassword = "" ;
   this.A151SecUserDescripcion = "" ;
   this.A166SecUserCargaPolizas = false ;
   this.A141SecUserId = 0 ;
   this.A152SecUserPadre = 0 ;
   this.A216SecUserMail = "" ;
   this.A217SecUserKey = "" ;
   this.A218SecUserToken = "" ;
   this.A219SecUserTokenFecha = gx.date.nullDate() ;
   this.Events = {"e16382_client": ["ENTER", true] ,"e17382_client": ["CANCEL", true] ,"e11381_client": ["'DOUPDATE'", false] ,"e12381_client": ["'DODELETE'", false] ,"e13381_client": ["'DOUAASSOCIATEROLES'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV19Pgmname',fld:'vPGMNAME',pic:''},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["LOAD"] = [[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'gx.fn.getCtrlProperty("SECUSERID","Visible")',ctrl:'SECUSERID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERPADRE","Visible")',ctrl:'SECUSERPADRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERMAIL","Visible")',ctrl:'SECUSERMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERKEY","Visible")',ctrl:'SECUSERKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKEN","Visible")',ctrl:'SECUSERTOKEN',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECUSERTOKENFECHA","Visible")',ctrl:'SECUSERTOKENFECHA',prop:'Visible'},{ctrl:'BTNUPDATE',prop:'Visible'},{ctrl:'BTNDELETE',prop:'Visible'},{ctrl:'BTNUAASSOCIATEROLES',prop:'Visible'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["'DODELETE'"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["'DOUAASSOCIATEROLES'"] = [[{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.EvtParms["VALID_SECUSERID"] = [[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}],[{av:'A166SecUserCargaPolizas',fld:'SECUSERCARGAPOLIZAS',pic:''}]];
   this.Initialize( );
});
