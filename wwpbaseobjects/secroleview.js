/*!   GeneXus C# 16_0_10-142546 on 4/20/2021 0:0:2.49
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secroleview', false, function () {
   this.ServerClass =  "wwpbaseobjects.secroleview" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV14LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS") ;
      this.AV15SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE") ;
      this.AV10SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.AV8TabCode=gx.fn.getControlValue("vTABCODE") ;
      this.AV10SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.AV14LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS") ;
      this.AV15SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE") ;
   };
   this.s112_client=function()
   {
      if ( this.AV14LoadAllTabs || ( this.AV15SelectedTabCode == "" ) || ( this.AV15SelectedTabCode == "General" ) )
      {
         this.createWebComponent('Generalwc','WWPBaseObjects.SecRoleGeneral',[this.AV10SecRoleId]);
      }
      if ( this.AV14LoadAllTabs || ( this.AV15SelectedTabCode == "SecFunctionalityRole" ) )
      {
         this.createWebComponent('Secfunctionalityrolewc','WWPBaseObjects.SecRoleSecFunctionalityRoleWC',[this.AV10SecRoleId]);
      }
      if ( this.AV14LoadAllTabs || ( this.AV15SelectedTabCode == "SecUserRole" ) )
      {
         this.createWebComponent('Secuserrolewc','WWPBaseObjects.SecRoleSecUserRoleWC',[this.AV10SecRoleId]);
      }
   };
   this.e13331_client=function()
   {
      this.clearMessages();
      this.AV15SelectedTabCode =  this.TABSContainer.ActivePageControlName  ;
      this.AV14LoadAllTabs =  false  ;
      this.s112_client();
      this.refreshOutputs([{av:'AV15SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV14LoadAllTabs',fld:'vLOADALLTABS',pic:''},{ctrl:'GENERALWC'},{ctrl:'SECFUNCTIONALITYROLEWC'},{ctrl:'SECUSERROLEWC'}]);
      return gx.$.Deferred().resolve();
   };
   this.e14332_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15332_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,27,29,30,31,34,35,37,38,39,42,43,45,46,47];
   this.GXLastCtrlId =47;
   this.TABSContainer = gx.uc.getNew(this, 24, 16, "gx.ui.controls.Tab", "TABSContainer", "Tabs", "TABS");
   var TABSContainer = this.TABSContainer;
   TABSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABSContainer.setProp("ActivePage", "Activepage", '', "int");
   TABSContainer.setDynProp("ActivePageControlName", "Activepagecontrolname", "", "char");
   TABSContainer.setProp("PageCount", "Pagecount", 3, "num");
   TABSContainer.setProp("Class", "Class", "ViewTab Tab", "str");
   TABSContainer.setProp("HistoryManagement", "Historymanagement", true, "bool");
   TABSContainer.setProp("Visible", "Visible", true, "bool");
   TABSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   TABSContainer.addEventHandler("TabChanged", this.e13331_client);
   this.setUserControl(TABSContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"HEADER",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"TABLETITLE",grid:0};
   GXValidFnc[12]={ id: 12, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"VIEWTITLE", format:0,grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id:16 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLENAME",gxz:"Z148SecRoleName",gxold:"O148SecRoleName",gxvar:"A148SecRoleName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A148SecRoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z148SecRoleName=Value},v2c:function(){gx.fn.setControlValue("SECROLENAME",gx.O.A148SecRoleName,0)},c2v:function(){if(this.val()!==undefined)gx.O.A148SecRoleName=this.val()},val:function(){return gx.fn.getControlValue("SECROLENAME")},nac:gx.falseFn};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"WORKWITHLINK", format:0,grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"GENERAL_TITLE", format:0,grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"UNNAMEDTABLEGENERAL",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"SECFUNCTIONALITYROLE_TITLE", format:0,grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"UNNAMEDTABLESECFUNCTIONALITYROLE",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"SECUSERROLE_TITLE", format:0,grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"UNNAMEDTABLESECUSERROLE",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   this.A148SecRoleName = "" ;
   this.Z148SecRoleName = "" ;
   this.O148SecRoleName = "" ;
   this.A148SecRoleName = "" ;
   this.AV10SecRoleId = 0 ;
   this.AV8TabCode = "" ;
   this.A139SecRoleId = 0 ;
   this.AV14LoadAllTabs = false ;
   this.AV15SelectedTabCode = "" ;
   this.Events = {"e14332_client": ["ENTER", true] ,"e15332_client": ["CANCEL", true] ,"e13331_client": ["TABS.TABCHANGED", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV10SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'AV8TabCode',fld:'vTABCODE',pic:'',hsh:true},{av:'A148SecRoleName',fld:'SECROLENAME',pic:''}],[]];
   this.EvtParms["START"] = [[{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV10SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true},{av:'A148SecRoleName',fld:'SECROLENAME',pic:''},{av:'AV8TabCode',fld:'vTABCODE',pic:'',hsh:true},{av:'AV14LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'AV15SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:'WORKWITHLINK',prop:'Link'},{ctrl:'FORM',prop:'Caption'},{av:'AV15SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'this.TABSContainer.ActivePageControlName',ctrl:'TABS',prop:'ActivePageControlName'},{ctrl:'GENERALWC'},{ctrl:'SECFUNCTIONALITYROLEWC'},{ctrl:'SECUSERROLEWC'}]];
   this.EvtParms["LOAD"] = [[],[]];
   this.EvtParms["TABS.TABCHANGED"] = [[{av:'this.TABSContainer.ActivePageControlName',ctrl:'TABS',prop:'ActivePageControlName'},{av:'AV14LoadAllTabs',fld:'vLOADALLTABS',pic:''},{av:'AV15SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV10SecRoleId',fld:'vSECROLEID',pic:'ZZZ9',hsh:true}],[{av:'AV15SelectedTabCode',fld:'vSELECTEDTABCODE',pic:''},{av:'AV14LoadAllTabs',fld:'vLOADALLTABS',pic:''},{ctrl:'GENERALWC'},{ctrl:'SECFUNCTIONALITYROLEWC'},{ctrl:'SECUSERROLEWC'}]];
   this.setVCMap("AV14LoadAllTabs", "vLOADALLTABS", 0, "boolean", 4, 0);
   this.setVCMap("AV15SelectedTabCode", "vSELECTEDTABCODE", 0, "char", 50, 0);
   this.setVCMap("AV10SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV8TabCode", "vTABCODE", 0, "char", 50, 0);
   this.setVCMap("AV10SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV14LoadAllTabs", "vLOADALLTABS", 0, "boolean", 4, 0);
   this.setVCMap("AV15SelectedTabCode", "vSELECTEDTABCODE", 0, "char", 50, 0);
   this.Initialize( );
   this.setComponent({id: "GENERALWC" ,GXClass: null , Prefix: "W0032" , lvl: 1 });
   this.setComponent({id: "SECFUNCTIONALITYROLEWC" ,GXClass: null , Prefix: "W0040" , lvl: 1 });
   this.setComponent({id: "SECUSERROLEWC" ,GXClass: null , Prefix: "W0048" , lvl: 1 });
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secroleview);});
