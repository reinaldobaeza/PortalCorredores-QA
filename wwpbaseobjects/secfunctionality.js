/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:46.9
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secfunctionality', false, function () {
   this.ServerClass =  "wwpbaseobjects.secfunctionality" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV7SecFunctionalityId=gx.fn.getIntegerValue("vSECFUNCTIONALITYID",'.') ;
      this.AV12Insert_SecParentFunctionalityId=gx.fn.getIntegerValue("vINSERT_SECPARENTFUNCTIONALITYID",'.') ;
      this.AV19Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV10TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
   this.Valid_Secfunctionalityid=function()
   {
      return this.validCliEvt("Valid_Secfunctionalityid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("SECFUNCTIONALITYID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Valid_Secfunctionalitykey=function()
   {
      return this.validSrvEvt("Valid_Secfunctionalitykey", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.Valid_Secparentfunctionalityid=function()
   {
      return this.validSrvEvt("Valid_Secparentfunctionalityid", 0).then((function (ret) {
      return ret;
      }).closure(this));
   }
   this.e12082_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e130810_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140810_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
   this.GXLastCtrlId =59;
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
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Secfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYID",gxz:"Z136SecFunctionalityId",gxold:"O136SecFunctionalityId",gxvar:"A136SecFunctionalityId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z136SecFunctionalityId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYID",gx.O.A136SecFunctionalityId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECFUNCTIONALITYID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Secfunctionalitykey,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYKEY",gxz:"Z138SecFunctionalityKey",gxold:"O138SecFunctionalityKey",gxvar:"A138SecFunctionalityKey",ucs:[],op:[],ip:[25,30],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A138SecFunctionalityKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z138SecFunctionalityKey=Value},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYKEY",gx.O.A138SecFunctionalityKey,0)},c2v:function(){if(this.val()!==undefined)gx.O.A138SecFunctionalityKey=this.val()},val:function(){return gx.fn.getControlValue("SECFUNCTIONALITYKEY")},nac:gx.falseFn};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYDESCRIPTION",gxz:"Z143SecFunctionalityDescription",gxold:"O143SecFunctionalityDescription",gxvar:"A143SecFunctionalityDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A143SecFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z143SecFunctionalityDescription=Value},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYDESCRIPTION",gx.O.A143SecFunctionalityDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.A143SecFunctionalityDescription=this.val()},val:function(){return gx.fn.getControlValue("SECFUNCTIONALITYDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYTYPE",gxz:"Z144SecFunctionalityType",gxold:"O144SecFunctionalityType",gxvar:"A144SecFunctionalityType",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z144SecFunctionalityType=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("SECFUNCTIONALITYTYPE",gx.O.A144SecFunctionalityType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECFUNCTIONALITYTYPE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYDESCRIPTION",gxz:"Z146SecParentFunctionalityDescription",gxold:"O146SecParentFunctionalityDescription",gxvar:"A146SecParentFunctionalityDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A146SecParentFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z146SecParentFunctionalityDescription=Value},v2c:function(){gx.fn.setControlValue("SECPARENTFUNCTIONALITYDESCRIPTION",gx.O.A146SecParentFunctionalityDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.A146SecParentFunctionalityDescription=this.val()},val:function(){return gx.fn.getControlValue("SECPARENTFUNCTIONALITYDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"BTNTRN_ENTER",grid:0,evt:"e130810_client",std:"ENTER"};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"BTNTRN_CANCEL",grid:0,evt:"e140810_client"};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"BTNTRN_DELETE",grid:0,evt:"e150810_client",std:"DELETE"};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[58]={ id:58 ,lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Secparentfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYID",gxz:"Z137SecParentFunctionalityId",gxold:"O137SecParentFunctionalityId",gxvar:"A137SecParentFunctionalityId",ucs:[],op:[45],ip:[45,58],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A137SecParentFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z137SecParentFunctionalityId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECPARENTFUNCTIONALITYID",gx.O.A137SecParentFunctionalityId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A137SecParentFunctionalityId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECPARENTFUNCTIONALITYID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV12Insert_SecParentFunctionalityId))}};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYACTIVE",gxz:"Z142SecFunctionalityActive",gxold:"O142SecFunctionalityActive",gxvar:"A142SecFunctionalityActive",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A142SecFunctionalityActive=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z142SecFunctionalityActive=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("SECFUNCTIONALITYACTIVE",gx.O.A142SecFunctionalityActive,0)},c2v:function(){if(this.val()!==undefined)gx.O.A142SecFunctionalityActive=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("SECFUNCTIONALITYACTIVE")},nac:gx.falseFn};
   this.A136SecFunctionalityId = 0 ;
   this.Z136SecFunctionalityId = 0 ;
   this.O136SecFunctionalityId = 0 ;
   this.A138SecFunctionalityKey = "" ;
   this.Z138SecFunctionalityKey = "" ;
   this.O138SecFunctionalityKey = "" ;
   this.A143SecFunctionalityDescription = "" ;
   this.Z143SecFunctionalityDescription = "" ;
   this.O143SecFunctionalityDescription = "" ;
   this.A144SecFunctionalityType = 0 ;
   this.Z144SecFunctionalityType = 0 ;
   this.O144SecFunctionalityType = 0 ;
   this.A146SecParentFunctionalityDescription = "" ;
   this.Z146SecParentFunctionalityDescription = "" ;
   this.O146SecParentFunctionalityDescription = "" ;
   this.A137SecParentFunctionalityId = 0 ;
   this.Z137SecParentFunctionalityId = 0 ;
   this.O137SecParentFunctionalityId = 0 ;
   this.A142SecFunctionalityActive = false ;
   this.Z142SecFunctionalityActive = false ;
   this.O142SecFunctionalityActive = false ;
   this.AV18WWPContext = {UserId:0,UserName:"",UserDescripcion:""} ;
   this.AV10TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV20GXV1 = 0 ;
   this.AV12Insert_SecParentFunctionalityId = 0 ;
   this.AV13TrnContextAtt = {AttributeName:"",AttributeValue:""} ;
   this.AV7SecFunctionalityId = 0 ;
   this.AV11WebSession = {} ;
   this.A136SecFunctionalityId = 0 ;
   this.A137SecParentFunctionalityId = 0 ;
   this.AV19Pgmname = "" ;
   this.A138SecFunctionalityKey = "" ;
   this.A143SecFunctionalityDescription = "" ;
   this.A144SecFunctionalityType = 0 ;
   this.A146SecParentFunctionalityDescription = "" ;
   this.A142SecFunctionalityActive = false ;
   this.Gx_mode = "" ;
   this.Events = {"e12082_client": ["AFTER TRN", true] ,"e130810_client": ["ENTER", true] ,"e140810_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7SecFunctionalityId',fld:'vSECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV10TrnContext',fld:'vTRNCONTEXT',pic:'',hsh:true},{av:'AV7SecFunctionalityId',fld:'vSECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true},{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9'},{av:'A138SecFunctionalityKey',fld:'SECFUNCTIONALITYKEY',pic:''},{ctrl:'SECFUNCTIONALITYTYPE'},{av:'A144SecFunctionalityType',fld:'SECFUNCTIONALITYTYPE',pic:'Z9'}],[]];
   this.EvtParms["START"] = [[{av:'AV19Pgmname',fld:'vPGMNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{ctrl:'FORM',prop:'Caption'}],[{av:'AV18WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV10TrnContext',fld:'vTRNCONTEXT',pic:'',hsh:true},{av:'AV20GXV1',fld:'vGXV1',pic:'99999999'},{av:'AV13TrnContextAtt',fld:'vTRNCONTEXTATT',pic:''},{av:'AV12Insert_SecParentFunctionalityId',fld:'vINSERT_SECPARENTFUNCTIONALITYID',pic:'ZZZZZZZZZ9'},{av:'gx.fn.getCtrlProperty("SECPARENTFUNCTIONALITYID","Visible")',ctrl:'SECPARENTFUNCTIONALITYID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYACTIVE","Visible")',ctrl:'SECFUNCTIONALITYACTIVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TEXTBLOCKTITLE","Caption")',ctrl:'TEXTBLOCKTITLE',prop:'Caption'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV10TrnContext',fld:'vTRNCONTEXT',pic:'',hsh:true}],[]];
   this.EvtParms["VALID_SECFUNCTIONALITYID"] = [[],[]];
   this.EvtParms["VALID_SECFUNCTIONALITYKEY"] = [[{av:'A138SecFunctionalityKey',fld:'SECFUNCTIONALITYKEY',pic:''},{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9'}],[]];
   this.EvtParms["VALID_SECPARENTFUNCTIONALITYID"] = [[{av:'A137SecParentFunctionalityId',fld:'SECPARENTFUNCTIONALITYID',pic:'ZZZZZZZZZ9'},{av:'A146SecParentFunctionalityDescription',fld:'SECPARENTFUNCTIONALITYDESCRIPTION',pic:''}],[{av:'A146SecParentFunctionalityDescription',fld:'SECPARENTFUNCTIONALITYDESCRIPTION',pic:''}]];
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV7SecFunctionalityId", "vSECFUNCTIONALITYID", 0, "int", 10, 0);
   this.setVCMap("AV12Insert_SecParentFunctionalityId", "vINSERT_SECPARENTFUNCTIONALITYID", 0, "int", 10, 0);
   this.setVCMap("AV19Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV10TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secfunctionality);});
