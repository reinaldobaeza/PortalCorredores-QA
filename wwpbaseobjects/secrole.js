/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:47.45
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secrole', false, function () {
   this.ServerClass =  "wwpbaseobjects.secrole" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV12SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.AV17Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV10TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
   this.Valid_Secroleid=function()
   {
      return this.validCliEvt("Valid_Secroleid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECROLEID");
         this.AnyError  = 0;

         this.refreshOutputs([{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.e120b2_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e130b14_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140b14_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
   this.GXLastCtrlId =49;
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
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Secroleid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEID",gxz:"Z139SecRoleId",gxold:"O139SecRoleId",gxvar:"A139SecRoleId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A139SecRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z139SecRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECROLEID",gx.O.A139SecRoleId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A139SecRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECROLEID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLENAME",gxz:"Z148SecRoleName",gxold:"O148SecRoleName",gxvar:"A148SecRoleName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A148SecRoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z148SecRoleName=Value},v2c:function(){gx.fn.setControlValue("SECROLENAME",gx.O.A148SecRoleName,0)},c2v:function(){if(this.val()!==undefined)gx.O.A148SecRoleName=this.val()},val:function(){return gx.fn.getControlValue("SECROLENAME")},nac:gx.falseFn};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEDESCRIPTION",gxz:"Z147SecRoleDescription",gxold:"O147SecRoleDescription",gxvar:"A147SecRoleDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A147SecRoleDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z147SecRoleDescription=Value},v2c:function(){gx.fn.setControlValue("SECROLEDESCRIPTION",gx.O.A147SecRoleDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.A147SecRoleDescription=this.val()},val:function(){return gx.fn.getControlValue("SECROLEDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEASOCIACORREDOR",gxz:"Z162SecRoleAsociaCorredor",gxold:"O162SecRoleAsociaCorredor",gxvar:"A162SecRoleAsociaCorredor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A162SecRoleAsociaCorredor=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z162SecRoleAsociaCorredor=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("SECROLEASOCIACORREDOR",gx.O.A162SecRoleAsociaCorredor,true)},c2v:function(){if(this.val()!==undefined)gx.O.A162SecRoleAsociaCorredor=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("SECROLEASOCIACORREDOR")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"BTNTRN_ENTER",grid:0,evt:"e130b14_client",std:"ENTER"};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"BTNTRN_CANCEL",grid:0,evt:"e140b14_client"};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"BTNTRN_DELETE",grid:0,evt:"e150b14_client",std:"DELETE"};
   this.A139SecRoleId = 0 ;
   this.Z139SecRoleId = 0 ;
   this.O139SecRoleId = 0 ;
   this.A148SecRoleName = "" ;
   this.Z148SecRoleName = "" ;
   this.O148SecRoleName = "" ;
   this.A147SecRoleDescription = "" ;
   this.Z147SecRoleDescription = "" ;
   this.O147SecRoleDescription = "" ;
   this.A162SecRoleAsociaCorredor = false ;
   this.Z162SecRoleAsociaCorredor = false ;
   this.O162SecRoleAsociaCorredor = false ;
   this.AV16WWPContext = {UserId:0,UserName:"",UserDescripcion:""} ;
   this.AV9IsAuthorized = false ;
   this.AV17Pgmname = "" ;
   this.AV10TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV12SecRoleId = 0 ;
   this.AV11WebSession = {} ;
   this.A139SecRoleId = 0 ;
   this.A148SecRoleName = "" ;
   this.A147SecRoleDescription = "" ;
   this.A162SecRoleAsociaCorredor = false ;
   this.Gx_mode = "" ;
   this.Events = {"e120b2_client": ["AFTER TRN", true] ,"e130b14_client": ["ENTER", true] ,"e140b14_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV12SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV10TrnContext',fld:'vTRNCONTEXT',pic:'',hsh:true},{av:'AV12SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["START"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV17Pgmname',fld:'vPGMNAME',pic:''},{ctrl:'FORM',prop:'Caption'},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'AV16WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV9IsAuthorized',fld:'vISAUTHORIZED',pic:''},{av:'AV10TrnContext',fld:'vTRNCONTEXT',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("TEXTBLOCKTITLE","Caption")',ctrl:'TEXTBLOCKTITLE',prop:'Caption'},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV10TrnContext',fld:'vTRNCONTEXT',pic:'',hsh:true},{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EvtParms["VALID_SECROLEID"] = [[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}],[{av:'A162SecRoleAsociaCorredor',fld:'SECROLEASOCIACORREDOR',pic:''}]];
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV12SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV17Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV10TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secrole);});
