/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:57.37
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.managefilters', false, function () {
   this.ServerClass =  "wwpbaseobjects.managefilters" ;
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
      this.AV7GridStateCollection=gx.fn.getControlValue("vGRIDSTATECOLLECTION") ;
      this.AV17UserKey=gx.fn.getControlValue("vUSERKEY") ;
   };
   this.e110c2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140c2_client=function()
   {
      return this.executeServerEvent("VMOVEUP.CLICK", true, arguments[0], false, false);
   };
   this.e150c2_client=function()
   {
      return this.executeServerEvent("VMOVEDOWN.CLICK", true, arguments[0], false, false);
   };
   this.e160c2_client=function()
   {
      return this.executeServerEvent("VUDELETE.CLICK", true, arguments[0], false, false);
   };
   this.e170c1_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,36,37,38,39];
   this.GXLastCtrlId =39;
   this.GridgridstatecollectionsContainer = new gx.grid.grid(this, 2,"WbpLvl2",15,"Gridgridstatecollections","Gridgridstatecollections","GridgridstatecollectionsContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.managefilters",[],false,1,false,true,0,true,false,false,"CollWWPBaseObjects\GridStateCollection.Item",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"AV7GridStateCollection",false,[1,1,1,1],false,0,true,false);
   var GridgridstatecollectionsContainer = this.GridgridstatecollectionsContainer;
   GridgridstatecollectionsContainer.addSingleLineEdit("Moveup",16,"vMOVEUP","","","MoveUp","char",30,"px",20,20,"left","e140c2_client",[],"Moveup","MoveUp",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridgridstatecollectionsContainer.addSingleLineEdit("Movedown",17,"vMOVEDOWN","","","MoveDown","char",30,"px",20,20,"left","e150c2_client",[],"Movedown","MoveDown",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridgridstatecollectionsContainer.addSingleLineEdit("GXV2",18,"GRIDSTATECOLLECTION__TITLE","","","Title","svchar",0,"px",100,80,"left",null,[],"GXV2","GXV2",true,0,false,false,"",1,"WWColumn");
   GridgridstatecollectionsContainer.addSingleLineEdit("GXV3",19,"GRIDSTATECOLLECTION__GRIDSTATEXML","URL","","GridStateXML","vchar",0,"px",2097152,80,"left",null,[],"GXV3","GXV3",true,0,false,false,"AttributeRealWidth",1,"WWColumn");
   GridgridstatecollectionsContainer.addSingleLineEdit("Udelete",20,"vUDELETE","","","UDelete","char",30,"px",20,20,"left","e160c2_client",[],"Udelete","UDelete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   this.GridgridstatecollectionsContainer.emptyText = "";
   this.setGrid(GridgridstatecollectionsContainer);
   this.DVELOP_BOOTSTRAP_PANEL1Container = gx.uc.getNew(this, 34, 16, "BootstrapPanel", "DVELOP_BOOTSTRAP_PANEL1Container", "Dvelop_bootstrap_panel1", "DVELOP_BOOTSTRAP_PANEL1");
   var DVELOP_BOOTSTRAP_PANEL1Container = this.DVELOP_BOOTSTRAP_PANEL1Container;
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("Class", "Class", "", "char");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("Enabled", "Enabled", true, "boolean");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("Width", "Width", "100", "str");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("Height", "Height", "100", "str");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("AutoWidth", "Autowidth", false, "bool");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("AutoHeight", "Autoheight", false, "bool");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("Cls", "Cls", "", "str");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("ShowHeader", "Showheader", true, "bool");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("Title", "Title", "", "str");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("Collapsible", "Collapsible", true, "bool");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("Collapsed", "Collapsed", false, "bool");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("ShowCollapseIcon", "Showcollapseicon", true, "bool");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("IconPosition", "Iconposition", "left", "str");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("AutoScroll", "Autoscroll", true, "bool");
   DVELOP_BOOTSTRAP_PANEL1Container.setProp("Visible", "Visible", true, "bool");
   DVELOP_BOOTSTRAP_PANEL1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(DVELOP_BOOTSTRAP_PANEL1Container);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLECONTENT",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[16]={ id:16 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMOVEUP",gxz:"ZV16MoveUp",gxold:"OV16MoveUp",gxvar:"AV16MoveUp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV16MoveUp=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16MoveUp=Value},v2c:function(row){gx.fn.setGridControlValue("vMOVEUP",row || gx.fn.currentGridRowImpl(15),gx.O.AV16MoveUp,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV16MoveUp=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vMOVEUP",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn,evt:"e140c2_client"};
   GXValidFnc[17]={ id:17 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMOVEDOWN",gxz:"ZV15MoveDown",gxold:"OV15MoveDown",gxvar:"AV15MoveDown",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV15MoveDown=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15MoveDown=Value},v2c:function(row){gx.fn.setGridControlValue("vMOVEDOWN",row || gx.fn.currentGridRowImpl(15),gx.O.AV15MoveDown,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV15MoveDown=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vMOVEDOWN",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn,evt:"e150c2_client"};
   GXValidFnc[18]={ id:18 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRIDSTATECOLLECTION__TITLE",gxz:"ZV30GXV2",gxold:"OV30GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30GXV2=Value},v2c:function(row){gx.fn.setGridControlValue("GRIDSTATECOLLECTION__TITLE",row || gx.fn.currentGridRowImpl(15),gx.O.GXV2,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.GXV2=this.val(row)},val:function(row){return gx.fn.getGridControlValue("GRIDSTATECOLLECTION__TITLE",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};
   GXValidFnc[19]={ id:19 ,lvl:2,type:"vchar",len:2097152,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRIDSTATECOLLECTION__GRIDSTATEXML",gxz:"ZV31GXV3",gxold:"OV31GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31GXV3=Value},v2c:function(row){gx.fn.setGridControlValue("GRIDSTATECOLLECTION__GRIDSTATEXML",row || gx.fn.currentGridRowImpl(15),gx.O.GXV3,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.GXV3=this.val(row)},val:function(row){return gx.fn.getGridControlValue("GRIDSTATECOLLECTION__GRIDSTATEXML",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};
   GXValidFnc[20]={ id:20 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUDELETE",gxz:"ZV6UDelete",gxold:"OV6UDelete",gxvar:"AV6UDelete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV6UDelete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV6UDelete=Value},v2c:function(row){gx.fn.setGridControlValue("vUDELETE",row || gx.fn.currentGridRowImpl(15),gx.O.AV6UDelete,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV6UDelete=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUDELETE",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn,evt:"e160c2_client"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"BTNENTER",grid:0,evt:"e110c2_client",std:"ENTER"};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"BTNCANCEL",grid:0,evt:"e170c1_client"};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"HTML_USERTABLE_UTPANELDUMMY",grid:0};
   GXValidFnc[31]={ id: 31, fld:"UTPANELDUMMY",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOLLECTIONISEMPTY",gxz:"ZV18CollectionIsEmpty",gxold:"OV18CollectionIsEmpty",gxvar:"AV18CollectionIsEmpty",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV18CollectionIsEmpty=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV18CollectionIsEmpty=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCOLLECTIONISEMPTY",gx.O.AV18CollectionIsEmpty,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV18CollectionIsEmpty=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCOLLECTIONISEMPTY")},nac:gx.falseFn,values:['true','false']};
   this.ZV16MoveUp = "" ;
   this.OV16MoveUp = "" ;
   this.ZV15MoveDown = "" ;
   this.OV15MoveDown = "" ;
   this.ZV30GXV2 = "" ;
   this.OV30GXV2 = "" ;
   this.ZV31GXV3 = "" ;
   this.OV31GXV3 = "" ;
   this.ZV6UDelete = "" ;
   this.OV6UDelete = "" ;
   this.AV18CollectionIsEmpty = false ;
   this.ZV18CollectionIsEmpty = false ;
   this.OV18CollectionIsEmpty = false ;
   this.AV18CollectionIsEmpty = false ;
   this.AV17UserKey = "" ;
   this.AV16MoveUp = "" ;
   this.AV15MoveDown = "" ;
   this.GXV2 = "" ;
   this.GXV3 = "" ;
   this.AV6UDelete = "" ;
   this.AV7GridStateCollection = [ ] ;
   this.Events = {"e110c2_client": ["ENTER", true] ,"e140c2_client": ["VMOVEUP.CLICK", true] ,"e150c2_client": ["VMOVEDOWN.CLICK", true] ,"e160c2_client": ["VUDELETE.CLICK", true] ,"e170c1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'gx.fn.getCtrlProperty("vCOLLECTIONISEMPTY","Visible")',ctrl:'vCOLLECTIONISEMPTY',prop:'Visible'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{ctrl:'GRIDSTATECOLLECTION__TITLE',prop:'Title'},{ctrl:'FORM',prop:'Caption'},{ctrl:'GRIDSTATECOLLECTION__GRIDSTATEXML',prop:'Visible'},{ctrl:'GRIDSTATECOLLECTION__TITLE',prop:'Class'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS.LOAD"] = [[{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV16MoveUp',fld:'vMOVEUP',pic:''},{av:'AV15MoveDown',fld:'vMOVEDOWN',pic:''},{av:'AV6UDelete',fld:'vUDELETE',pic:''},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["VMOVEUP.CLICK"] = [[{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["VMOVEDOWN.CLICK"] = [[{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["VUDELETE.CLICK"] = [[{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS_FIRSTPAGE"] = [[{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS_PREVPAGE"] = [[{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS_NEXTPAGE"] = [[{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS_LASTPAGE"] = [[{av:'GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage'},{av:'GRIDGRIDSTATECOLLECTIONS_nEOF'},{ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'Rows'},{av:'AV17UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV7GridStateCollection',fld:'vGRIDSTATECOLLECTION',grid:15,pic:''},{av:'nRC_GXsfl_15',ctrl:'GRIDGRIDSTATECOLLECTIONS',prop:'GridRC'},{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}],[{av:'AV18CollectionIsEmpty',fld:'vCOLLECTIONISEMPTY',pic:''}]];
   this.EnterCtrl = ["BTNENTER"];
   this.setVCMap("AV7GridStateCollection", "vGRIDSTATECOLLECTION", 0, "CollWWPBaseObjects\GridStateCollection.Item", 0, 0);
   this.setVCMap("AV17UserKey", "vUSERKEY", 0, "svchar", 100, 0);
   GridgridstatecollectionsContainer.addRefreshingVar({rfrVar:"AV17UserKey"});
   GridgridstatecollectionsContainer.addRefreshingParm(this.GXValidFnc[39]);
   GridgridstatecollectionsContainer.addRefreshingParm({rfrVar:"AV17UserKey"});
   this.addGridBCProperty("Gridstatecollection", ["Title"], this.GXValidFnc[18], "AV7GridStateCollection");
   this.addGridBCProperty("Gridstatecollection", ["GridStateXML"], this.GXValidFnc[19], "AV7GridStateCollection");
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.managefilters);});
