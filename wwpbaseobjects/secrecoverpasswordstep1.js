/*!   GeneXus C# 16_0_10-142546 on 9/6/2024 13:7:21.11
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secrecoverpasswordstep1', false, function () {
   this.ServerClass =  "wwpbaseobjects.secrecoverpasswordstep1" ;
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
   };
   this.Validv_Usernamemail=function()
   {
      return this.validCliEvt("Validv_Usernamemail", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSERNAMEMAIL");
         this.AnyError  = 0;
         gxballoon.setAsFormatError();
         if ( ! ( gx.util.regExp.isMatch(this.AV23UserNameMail, "^((\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)|(\\s*))$") ) )
         {
            try {
               gxballoon.setError("Mail no válido");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.e144d1_client=function()
   {
      this.clearMessages();
      this.call("login.aspx", []);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e124d2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154d1_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,54,55,56,57,58,59,60,61,62];
   this.GXLastCtrlId =62;
   this.TIMERContainer = gx.uc.getNew(this, 53, 31, "Timer", "TIMERContainer", "Timer", "TIMER");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setDynProp("Interval", "Interval", 2000, "num");
   TIMERContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   TIMERContainer.addEventHandler("Elapsed", this.e144d1_client);
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
   GXValidFnc[21]={ id: 21, fld:"TXT_LABEL2", format:0,grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"UNNAMEDTABLE1",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"UNNAMEDTABLE2",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id:31 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usernamemail,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAMEMAIL",gxz:"ZV23UserNameMail",gxold:"OV23UserNameMail",gxvar:"AV23UserNameMail",ucs:[],op:[],ip:[31],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23UserNameMail=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23UserNameMail=Value},v2c:function(){gx.fn.setControlValue("vUSERNAMEMAIL",gx.O.AV23UserNameMail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23UserNameMail=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAMEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"UNNAMEDSECTION3",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"UNNAMEDSECTION4",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"BTNENTER",grid:0,evt:"e124d2_client",std:"ENTER"};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"BTNCANCEL",grid:0,evt:"e154d1_client"};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"TABLEERROR",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id:58 ,lvl:0,type:"char",len:512,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRESPUESACP",gxz:"ZV24RespuesaCP",gxold:"OV24RespuesaCP",gxvar:"AV24RespuesaCP",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV24RespuesaCP=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24RespuesaCP=Value},v2c:function(){gx.fn.setControlValue("vRESPUESACP",gx.O.AV24RespuesaCP,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV24RespuesaCP=this.val()},val:function(){return gx.fn.getControlValue("vRESPUESACP")},nac:gx.falseFn};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[62]={ id:62 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTXTERROR",gxz:"ZV17TXTError",gxold:"OV17TXTError",gxvar:"AV17TXTError",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17TXTError=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17TXTError=Value},v2c:function(){gx.fn.setControlValue("vTXTERROR",gx.O.AV17TXTError,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV17TXTError=this.val()},val:function(){return gx.fn.getControlValue("vTXTERROR")},nac:gx.falseFn};
   this.AV23UserNameMail = "" ;
   this.ZV23UserNameMail = "" ;
   this.OV23UserNameMail = "" ;
   this.AV24RespuesaCP = "" ;
   this.ZV24RespuesaCP = "" ;
   this.OV24RespuesaCP = "" ;
   this.AV17TXTError = "" ;
   this.ZV17TXTError = "" ;
   this.OV17TXTError = "" ;
   this.AV23UserNameMail = "" ;
   this.AV24RespuesaCP = "" ;
   this.AV17TXTError = "" ;
   this.Events = {"e124d2_client": ["ENTER", true] ,"e154d1_client": ["CANCEL", true] ,"e144d1_client": ["TIMER.ELAPSED", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[],[{av:'gx.fn.getCtrlProperty("TABLEERROR","Visible")',ctrl:'TABLEERROR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTXTERROR","Visible")',ctrl:'vTXTERROR',prop:'Visible'},{av:'AV17TXTError',fld:'vTXTERROR',pic:''},{av:'this.TIMERContainer.Interval',ctrl:'TIMER',prop:'Interval'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV23UserNameMail',fld:'vUSERNAMEMAIL',pic:''}],[{av:'gx.fn.getCtrlProperty("TABLEERROR","Visible")',ctrl:'TABLEERROR',prop:'Visible'},{av:'AV17TXTError',fld:'vTXTERROR',pic:''},{ctrl:'BTNENTER',prop:'Enabled'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'}]];
   this.EvtParms["TIMER.ELAPSED"] = [[],[]];
   this.EvtParms["VALIDV_USERNAMEMAIL"] = [[],[]];
   this.EnterCtrl = ["BTNENTER"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secrecoverpasswordstep1);});
