/*!   GeneXus C# 16_0_10-142546 on 4/20/2021 0:0:4.45
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secfunctionalityww', false, function () {
   this.ServerClass =  "wwpbaseobjects.secfunctionalityww" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.anyGridBaseTable = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV34ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV72ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV41TFSecFunctionalityKey=gx.fn.getControlValue("vTFSECFUNCTIONALITYKEY") ;
      this.AV42TFSecFunctionalityKey_Sel=gx.fn.getControlValue("vTFSECFUNCTIONALITYKEY_SEL") ;
      this.AV45TFSecFunctionalityDescription=gx.fn.getControlValue("vTFSECFUNCTIONALITYDESCRIPTION") ;
      this.AV46TFSecFunctionalityDescription_Sel=gx.fn.getControlValue("vTFSECFUNCTIONALITYDESCRIPTION_SEL") ;
      this.AV81TFSecFunctionalityType_Sels=gx.fn.getControlValue("vTFSECFUNCTIONALITYTYPE_SELS") ;
      this.AV52TFSecParentFunctionalityDescription=gx.fn.getControlValue("vTFSECPARENTFUNCTIONALITYDESCRIPTION") ;
      this.AV53TFSecParentFunctionalityDescription_Sel=gx.fn.getControlValue("vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL") ;
      this.AV99Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV29OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV30OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV18IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV19IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV27GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV80TFSecFunctionalityType_SelsJson=gx.fn.getControlValue("vTFSECFUNCTIONALITYTYPE_SELSJSON") ;
      this.AV34ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV72ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV41TFSecFunctionalityKey=gx.fn.getControlValue("vTFSECFUNCTIONALITYKEY") ;
      this.AV42TFSecFunctionalityKey_Sel=gx.fn.getControlValue("vTFSECFUNCTIONALITYKEY_SEL") ;
      this.AV45TFSecFunctionalityDescription=gx.fn.getControlValue("vTFSECFUNCTIONALITYDESCRIPTION") ;
      this.AV46TFSecFunctionalityDescription_Sel=gx.fn.getControlValue("vTFSECFUNCTIONALITYDESCRIPTION_SEL") ;
      this.AV81TFSecFunctionalityType_Sels=gx.fn.getControlValue("vTFSECFUNCTIONALITYTYPE_SELS") ;
      this.AV52TFSecParentFunctionalityDescription=gx.fn.getControlValue("vTFSECPARENTFUNCTIONALITYDESCRIPTION") ;
      this.AV53TFSecParentFunctionalityDescription_Sel=gx.fn.getControlValue("vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL") ;
      this.AV99Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV29OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV30OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV18IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV19IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
   };
   this.Validv_Secfunctionalitytype=function()
   {
      return this.validCliEvt("Validv_Secfunctionalitytype", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vSECFUNCTIONALITYTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV23SecFunctionalityType == 1 ) || ( this.AV23SecFunctionalityType == 2 ) || ( this.AV23SecFunctionalityType == 3 ) || ( this.AV23SecFunctionalityType == 4 ) || ( this.AV23SecFunctionalityType == 5 ) || ((0==this.AV23SecFunctionalityType)) ) )
         {
            try {
               gxballoon.setError("Campo Sec Functionality Type fuera de rango");
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
   this.Valid_Secparentfunctionalityid=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(59);
      return this.validCliEvt("Valid_Secparentfunctionalityid", 59, function () {
      try {
         if(  gx.fn.currentGridRowImpl(59) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SECPARENTFUNCTIONALITYID", gx.fn.currentGridRowImpl(59));
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
   this.s142_client=function()
   {
      this.DDO_GRIDContainer.SortedStatus =  gx.text.trim( gx.num.str( this.AV29OrderedBy, 4, 0))+":"+(this.AV30OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.s182_client=function()
   {
      this.AV23SecFunctionalityType = gx.num.trunc( 4 ,0) ;
      this.AV31SecFunctionalityDescriptionOperator = gx.num.trunc( 0 ,0) ;
      this.AV10SecFunctionalityDescription =  ''  ;
      this.AV41TFSecFunctionalityKey =  ''  ;
      this.AV42TFSecFunctionalityKey_Sel =  ''  ;
      this.AV45TFSecFunctionalityDescription =  ''  ;
      this.AV46TFSecFunctionalityDescription_Sel =  ''  ;
      this.AV81TFSecFunctionalityType_Sels =  [ ]  ;
      this.AV52TFSecParentFunctionalityDescription =  ''  ;
      this.AV53TFSecParentFunctionalityDescription_Sel =  ''  ;
      this.DDO_GRIDContainer.SelectedValue_set =  ""  ;
      this.DDO_GRIDContainer.FilteredText_set =  ""  ;
   };
   this.e122q2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e132q2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e142q2_client=function()
   {
      return this.executeServerEvent("DDO_GRID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e152q2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e112q2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e162q2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e172q2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e182q2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e222q2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e232q2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,33,34,35,38,39,40,41,42,43,46,47,49,50,51,52,54,55,56,57,58,60,61,62,63,64,65,66,67,68,69,70,71,72,74,75,76];
   this.GXLastCtrlId =76;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",59,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.secfunctionalityww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Display",60,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Update",61,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",62,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addBitmap("&Uaviewchildren","vUAVIEWCHILDREN",63,0,"px",17,"px",null,"","","","WWActionColumn");
   GridContainer.addSingleLineEdit(136,64,"SECFUNCTIONALITYID","Id","","SecFunctionalityId","int",0,"px",10,10,"right",null,[],136,"SecFunctionalityId",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(138,65,"SECFUNCTIONALITYKEY","Key","","SecFunctionalityKey","svchar",0,"px",100,80,"left",null,[],138,"SecFunctionalityKey",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(143,66,"SECFUNCTIONALITYDESCRIPTION","Description","","SecFunctionalityDescription","svchar",0,"px",100,80,"left",null,[],143,"SecFunctionalityDescription",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addComboBox(144,67,"SECFUNCTIONALITYTYPE","Type","SecFunctionalityType","int",null,0,true,false,0,"px","WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(137,68,"SECPARENTFUNCTIONALITYID","Parent Functionality Id  ","","SecParentFunctionalityId","int",0,"px",10,10,"right",null,[],137,"SecParentFunctionalityId",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(146,69,"SECPARENTFUNCTIONALITYDESCRIPTION","Parent Functionality","","SecParentFunctionalityDescription","svchar",0,"px",100,80,"left",null,[],146,"SecParentFunctionalityDescription",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addCheckBox(142,70,"SECFUNCTIONALITYACTIVE","Is Active?","","SecFunctionalityActive","boolean","true","false",null,false,false,0,"px","WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 73, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
   var GRIDPAGINATIONBARContainer = this.GRIDPAGINATIONBARContainer;
   GRIDPAGINATIONBARContainer.setProp("Enabled", "Enabled", true, "boolean");
   GRIDPAGINATIONBARContainer.setProp("Class", "Class", "PaginationBar", "str");
   GRIDPAGINATIONBARContainer.setProp("ShowFirst", "Showfirst", false, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowPrevious", "Showprevious", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowNext", "Shownext", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowLast", "Showlast", false, "bool");
   GRIDPAGINATIONBARContainer.setProp("PagesToShow", "Pagestoshow", 5, "num");
   GRIDPAGINATIONBARContainer.setProp("PagingButtonsPosition", "Pagingbuttonsposition", "Right", "str");
   GRIDPAGINATIONBARContainer.setProp("PagingCaptionPosition", "Pagingcaptionposition", "Left", "str");
   GRIDPAGINATIONBARContainer.setProp("EmptyGridClass", "Emptygridclass", "PaginationBarEmptyGrid", "str");
   GRIDPAGINATIONBARContainer.setProp("SelectedPage", "Selectedpage", "", "char");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageSelector", "Rowsperpageselector", true, "bool");
   GRIDPAGINATIONBARContainer.setDynProp("RowsPerPageSelectedValue", "Rowsperpageselectedvalue", 10, "num");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageOptions", "Rowsperpageoptions", "5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50", "str");
   GRIDPAGINATIONBARContainer.setProp("First", "First", "First", "str");
   GRIDPAGINATIONBARContainer.setProp("Previous", "Previous", "WWP_PagingPreviousCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("Next", "Next", "WWP_PagingNextCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("Last", "Last", "Last", "str");
   GRIDPAGINATIONBARContainer.setProp("Caption", "Caption", "Página <CURRENT_PAGE> de <TOTAL_PAGES>", "str");
   GRIDPAGINATIONBARContainer.setProp("EmptyGridCaption", "Emptygridcaption", "WWP_PagingEmptyGridCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageCaption", "Rowsperpagecaption", "WWP_PagingRowsPerPage", "str");
   GRIDPAGINATIONBARContainer.addV2CFunction('AV83GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV83GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV83GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV84GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV84GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV84GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e122q2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e132q2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_GRIDContainer = gx.uc.getNew(this, 77, 35, "DDOGridTitleSettingsM", "DDO_GRIDContainer", "Ddo_grid", "DDO_GRID");
   var DDO_GRIDContainer = this.DDO_GRIDContainer;
   DDO_GRIDContainer.setProp("Class", "Class", "", "char");
   DDO_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   DDO_GRIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_GRIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_GRIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_GRIDContainer.setProp("Tooltip", "Tooltip", "", "str");
   DDO_GRIDContainer.setProp("Cls", "Cls", "", "str");
   DDO_GRIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_GRIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_GRIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_GRIDContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumn", "Selectedcolumn", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumnFixedFilter", "Selectedcolumnfixedfilter", "", "char");
   DDO_GRIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_GRIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "", "str");
   DDO_GRIDContainer.setProp("Visible", "Visible", "", "str");
   DDO_GRIDContainer.setDynProp("GridInternalName", "Gridinternalname", "", "str");
   DDO_GRIDContainer.setProp("ColumnIds", "Columnids", "5:SecFunctionalityKey|6:SecFunctionalityDescription|7:SecFunctionalityType|9:SecParentFunctionalityDescription", "str");
   DDO_GRIDContainer.setProp("ColumnsSortValues", "Columnssortvalues", "2|1|3|4", "str");
   DDO_GRIDContainer.setProp("IncludeSortASC", "Includesortasc", "T", "str");
   DDO_GRIDContainer.setProp("IncludeSortDSC", "Includesortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroup", "Allowgroup", "", "str");
   DDO_GRIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_GRIDContainer.setProp("IncludeFilter", "Includefilter", "T|T||T", "str");
   DDO_GRIDContainer.setProp("FilterType", "Filtertype", "Character|Character||Character", "str");
   DDO_GRIDContainer.setProp("FilterIsRange", "Filterisrange", "", "str");
   DDO_GRIDContainer.setProp("IncludeDataList", "Includedatalist", "T", "str");
   DDO_GRIDContainer.setProp("DataListType", "Datalisttype", "Dynamic|Dynamic|FixedValues|Dynamic", "str");
   DDO_GRIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", "||T|", "str");
   DDO_GRIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "||1:Mode,2:Action,3:Tab,4:Object,5:Attribute|", "str");
   DDO_GRIDContainer.setProp("DataListProc", "Datalistproc", "WWPBaseObjects.SecFunctionalityWWGetFilterData", "str");
   DDO_GRIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "str");
   DDO_GRIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_GRIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_GRIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_GRIDContainer.setProp("SortASC", "Sortasc", "", "str");
   DDO_GRIDContainer.setProp("SortDSC", "Sortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroupText", "Allowgrouptext", "", "str");
   DDO_GRIDContainer.setProp("LoadingData", "Loadingdata", "", "str");
   DDO_GRIDContainer.setProp("CleanFilter", "Cleanfilter", "", "str");
   DDO_GRIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "str");
   DDO_GRIDContainer.setProp("RangeFilterTo", "Rangefilterto", "", "str");
   DDO_GRIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "str");
   DDO_GRIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_FilterSelected", "str");
   DDO_GRIDContainer.addV2CFunction('AV55DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV55DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV55DDO_TitleSettingsIcons); });
   DDO_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDContainer.addEventHandler("OnOptionClicked", this.e142q2_client);
   this.setUserControl(DDO_GRIDContainer);
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 78, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
   var INNEWWINDOW1Container = this.INNEWWINDOW1Container;
   INNEWWINDOW1Container.setProp("Class", "Class", "", "char");
   INNEWWINDOW1Container.setProp("Enabled", "Enabled", true, "boolean");
   INNEWWINDOW1Container.setDynProp("Width", "Width", "50", "str");
   INNEWWINDOW1Container.setDynProp("Height", "Height", "50", "str");
   INNEWWINDOW1Container.setProp("Name", "Name", "", "str");
   INNEWWINDOW1Container.setDynProp("Target", "Target", "", "str");
   INNEWWINDOW1Container.setProp("Fullscreen", "Fullscreen", false, "bool");
   INNEWWINDOW1Container.setProp("Location", "Location", true, "bool");
   INNEWWINDOW1Container.setProp("MenuBar", "Menubar", true, "bool");
   INNEWWINDOW1Container.setProp("Resizable", "Resizable", true, "bool");
   INNEWWINDOW1Container.setProp("Scrollbars", "Scrollbars", true, "bool");
   INNEWWINDOW1Container.setProp("TitleBar", "Titlebar", true, "bool");
   INNEWWINDOW1Container.setProp("ToolBar", "Toolbar", true, "bool");
   INNEWWINDOW1Container.setProp("directories", "Directories", true, "bool");
   INNEWWINDOW1Container.setProp("status", "Status", true, "bool");
   INNEWWINDOW1Container.setProp("copyhistory", "Copyhistory", true, "bool");
   INNEWWINDOW1Container.setProp("top", "Top", "5", "str");
   INNEWWINDOW1Container.setProp("left", "Left", "5", "str");
   INNEWWINDOW1Container.setProp("fitscreen", "Fitscreen", false, "bool");
   INNEWWINDOW1Container.setProp("RefreshParentOnClose", "Refreshparentonclose", false, "bool");
   INNEWWINDOW1Container.setProp("Targets", "Targets", '', "str");
   INNEWWINDOW1Container.setProp("Visible", "Visible", true, "bool");
   INNEWWINDOW1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(INNEWWINDOW1Container);
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 79, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
   var DDO_GRIDCOLUMNSSELECTORContainer = this.DDO_GRIDCOLUMNSSELECTORContainer;
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Class", "Class", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Enabled", "Enabled", true, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Icon", "Icon", "", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Caption", "Caption", "Selecciona columnas", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Tooltip", "Tooltip", "WWP_EditColumnsTooltip", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Cls", "Cls", "ColumnsSelector hidden-xs", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridColumnsSelector", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Visible", "Visible", true, "bool");
   DDO_GRIDCOLUMNSSELECTORContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("UpdateButtonText", "Updatebuttontext", "WWP_ColumnsSelectorButton", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV55DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV55DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV55DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV72ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV72ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV72ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e152q2_client);
   this.setUserControl(DDO_GRIDCOLUMNSSELECTORContainer);
   this.DDO_MANAGEFILTERSContainer = gx.uc.getNew(this, 28, 0, "BootstrapDropDownOptions", "DDO_MANAGEFILTERSContainer", "Ddo_managefilters", "DDO_MANAGEFILTERS");
   var DDO_MANAGEFILTERSContainer = this.DDO_MANAGEFILTERSContainer;
   DDO_MANAGEFILTERSContainer.setProp("Class", "Class", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("Enabled", "Enabled", true, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("IconType", "Icontype", "FontIcon", "str");
   DDO_MANAGEFILTERSContainer.setProp("Icon", "Icon", "fas fa-filter", "str");
   DDO_MANAGEFILTERSContainer.setProp("Caption", "Caption", "", "str");
   DDO_MANAGEFILTERSContainer.setProp("Tooltip", "Tooltip", "WWP_ManageFiltersTooltip", "str");
   DDO_MANAGEFILTERSContainer.setProp("Cls", "Cls", "ManageFilters", "str");
   DDO_MANAGEFILTERSContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_MANAGEFILTERSContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "Regular", "str");
   DDO_MANAGEFILTERSContainer.setProp("Visible", "Visible", true, "bool");
   DDO_MANAGEFILTERSContainer.setProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_MANAGEFILTERSContainer.addV2CFunction('AV38ManageFiltersData', "vMANAGEFILTERSDATA", 'SetDropDownOptionsData');
   DDO_MANAGEFILTERSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV38ManageFiltersData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",UC.ParentObject.AV38ManageFiltersData); });
   DDO_MANAGEFILTERSContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   DDO_MANAGEFILTERSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e112q2_client);
   this.setUserControl(DDO_MANAGEFILTERSContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLEHEADER",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"TABLEACTIONS",grid:0};
   GXValidFnc[12]={ id: 12, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"TEXTBLOCKTITLE", format:0,grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"BTNINSERT",grid:0,evt:"e162q2_client"};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"BTNEXPORT",grid:0,evt:"e172q2_client"};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"BTNEXPORTREPORT",grid:0,evt:"e182q2_client"};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"BTNEDITCOLUMNS",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"TABLERIGHTHEADER",grid:0};
   GXValidFnc[30]={ id: 30, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Secfunctionalitytype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYTYPE",gxz:"ZV23SecFunctionalityType",gxold:"OV23SecFunctionalityType",gxvar:"AV23SecFunctionalityType",ucs:[],op:[35],ip:[35],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV23SecFunctionalityType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV23SecFunctionalityType=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSECFUNCTIONALITYTYPE",gx.O.AV23SecFunctionalityType)},c2v:function(){if(this.val()!==undefined)gx.O.AV23SecFunctionalityType=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSECFUNCTIONALITYTYPE",'.')},nac:gx.falseFn};
   GXValidFnc[38]={ id: 38, fld:"TABLESPLITTEDFILTERTEXTSECFUNCTIONALITYDESCRIPTION",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"FILTERTEXTSECFUNCTIONALITYDESCRIPTION", format:0,grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"TABLEMERGEDSECFUNCTIONALITYDESCRIPTION",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id:47 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYDESCRIPTIONOPERATOR",gxz:"ZV31SecFunctionalityDescriptionOperator",gxold:"OV31SecFunctionalityDescriptionOperator",gxvar:"AV31SecFunctionalityDescriptionOperator",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV31SecFunctionalityDescriptionOperator=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV31SecFunctionalityDescriptionOperator=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSECFUNCTIONALITYDESCRIPTIONOPERATOR",gx.O.AV31SecFunctionalityDescriptionOperator)},c2v:function(){if(this.val()!==undefined)gx.O.AV31SecFunctionalityDescriptionOperator=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSECFUNCTIONALITYDESCRIPTIONOPERATOR",'.')},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECFUNCTIONALITYDESCRIPTION",gxz:"ZV10SecFunctionalityDescription",gxold:"OV10SecFunctionalityDescription",gxvar:"AV10SecFunctionalityDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV10SecFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV10SecFunctionalityDescription=Value},v2c:function(){gx.fn.setControlValue("vSECFUNCTIONALITYDESCRIPTION",gx.O.AV10SecFunctionalityDescription,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV10SecFunctionalityDescription=this.val()},val:function(){return gx.fn.getControlValue("vSECFUNCTIONALITYDESCRIPTION")},nac:gx.falseFn};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV86Display",gxold:"OV86Display",gxvar:"AV86Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV86Display=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV86Display=Value},v2c:function(row){gx.fn.setGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(59),gx.O.AV86Display,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV86Display=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[61]={ id:61 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV11Update",gxold:"OV11Update",gxvar:"AV11Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV11Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(59),gx.O.AV11Update,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV11Update=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[62]={ id:62 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV12Delete",gxold:"OV12Delete",gxvar:"AV12Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV12Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(59),gx.O.AV12Delete,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV12Delete=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[63]={ id:63 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUAVIEWCHILDREN",gxz:"ZV24UAViewChildren",gxold:"OV24UAViewChildren",gxvar:"AV24UAViewChildren",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV24UAViewChildren=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24UAViewChildren=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUAVIEWCHILDREN",row || gx.fn.currentGridRowImpl(59),gx.O.AV24UAViewChildren,gx.O.AV98Uaviewchildren_GXI)},c2v:function(row){gx.O.AV98Uaviewchildren_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV24UAViewChildren=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUAVIEWCHILDREN",row || gx.fn.currentGridRowImpl(59))},val_GXI:function(row){return gx.fn.getGridControlValue("vUAVIEWCHILDREN_GXI",row || gx.fn.currentGridRowImpl(59))}, gxvar_GXI:'AV98Uaviewchildren_GXI',nac:gx.falseFn};
   GXValidFnc[64]={ id:64 ,lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYID",gxz:"Z136SecFunctionalityId",gxold:"O136SecFunctionalityId",gxvar:"A136SecFunctionalityId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z136SecFunctionalityId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(59),gx.O.A136SecFunctionalityId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A136SecFunctionalityId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(59),'.')},nac:gx.falseFn};
   GXValidFnc[65]={ id:65 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYKEY",gxz:"Z138SecFunctionalityKey",gxold:"O138SecFunctionalityKey",gxvar:"A138SecFunctionalityKey",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A138SecFunctionalityKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z138SecFunctionalityKey=Value},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYKEY",row || gx.fn.currentGridRowImpl(59),gx.O.A138SecFunctionalityKey,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A138SecFunctionalityKey=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYKEY",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYDESCRIPTION",gxz:"Z143SecFunctionalityDescription",gxold:"O143SecFunctionalityDescription",gxvar:"A143SecFunctionalityDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A143SecFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z143SecFunctionalityDescription=Value},v2c:function(row){gx.fn.setGridControlValue("SECFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(59),gx.O.A143SecFunctionalityDescription,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A143SecFunctionalityDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[67]={ id:67 ,lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYTYPE",gxz:"Z144SecFunctionalityType",gxold:"O144SecFunctionalityType",gxvar:"A144SecFunctionalityType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z144SecFunctionalityType=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("SECFUNCTIONALITYTYPE",row || gx.fn.currentGridRowImpl(59),gx.O.A144SecFunctionalityType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.A144SecFunctionalityType=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECFUNCTIONALITYTYPE",row || gx.fn.currentGridRowImpl(59),'.')},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:this.Valid_Secparentfunctionalityid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYID",gxz:"Z137SecParentFunctionalityId",gxold:"O137SecParentFunctionalityId",gxvar:"A137SecParentFunctionalityId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A137SecParentFunctionalityId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z137SecParentFunctionalityId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECPARENTFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(59),gx.O.A137SecParentFunctionalityId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A137SecParentFunctionalityId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECPARENTFUNCTIONALITYID",row || gx.fn.currentGridRowImpl(59),'.')},nac:gx.falseFn};
   GXValidFnc[69]={ id:69 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECPARENTFUNCTIONALITYDESCRIPTION",gxz:"Z146SecParentFunctionalityDescription",gxold:"O146SecParentFunctionalityDescription",gxvar:"A146SecParentFunctionalityDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A146SecParentFunctionalityDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z146SecParentFunctionalityDescription=Value},v2c:function(row){gx.fn.setGridControlValue("SECPARENTFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(59),gx.O.A146SecParentFunctionalityDescription,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A146SecParentFunctionalityDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECPARENTFUNCTIONALITYDESCRIPTION",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[70]={ id:70 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECFUNCTIONALITYACTIVE",gxz:"Z142SecFunctionalityActive",gxold:"O142SecFunctionalityActive",gxvar:"A142SecFunctionalityActive",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A142SecFunctionalityActive=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z142SecFunctionalityActive=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("SECFUNCTIONALITYACTIVE",row || gx.fn.currentGridRowImpl(59),gx.O.A142SecFunctionalityActive,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A142SecFunctionalityActive=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("SECFUNCTIONALITYACTIVE",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   this.AV23SecFunctionalityType = 0 ;
   this.ZV23SecFunctionalityType = 0 ;
   this.OV23SecFunctionalityType = 0 ;
   this.AV31SecFunctionalityDescriptionOperator = 0 ;
   this.ZV31SecFunctionalityDescriptionOperator = 0 ;
   this.OV31SecFunctionalityDescriptionOperator = 0 ;
   this.AV10SecFunctionalityDescription = "" ;
   this.ZV10SecFunctionalityDescription = "" ;
   this.OV10SecFunctionalityDescription = "" ;
   this.ZV86Display = "" ;
   this.OV86Display = "" ;
   this.ZV11Update = "" ;
   this.OV11Update = "" ;
   this.ZV12Delete = "" ;
   this.OV12Delete = "" ;
   this.ZV24UAViewChildren = "" ;
   this.OV24UAViewChildren = "" ;
   this.Z136SecFunctionalityId = 0 ;
   this.O136SecFunctionalityId = 0 ;
   this.Z138SecFunctionalityKey = "" ;
   this.O138SecFunctionalityKey = "" ;
   this.Z143SecFunctionalityDescription = "" ;
   this.O143SecFunctionalityDescription = "" ;
   this.Z144SecFunctionalityType = 0 ;
   this.O144SecFunctionalityType = 0 ;
   this.Z137SecParentFunctionalityId = 0 ;
   this.O137SecParentFunctionalityId = 0 ;
   this.Z146SecParentFunctionalityDescription = "" ;
   this.O146SecParentFunctionalityDescription = "" ;
   this.Z142SecFunctionalityActive = false ;
   this.O142SecFunctionalityActive = false ;
   this.AV38ManageFiltersData = [ ] ;
   this.AV23SecFunctionalityType = 0 ;
   this.AV31SecFunctionalityDescriptionOperator = 0 ;
   this.AV10SecFunctionalityDescription = "" ;
   this.AV83GridCurrentPage = 0 ;
   this.AV55DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV86Display = "" ;
   this.AV11Update = "" ;
   this.AV12Delete = "" ;
   this.AV24UAViewChildren = "" ;
   this.A136SecFunctionalityId = 0 ;
   this.A138SecFunctionalityKey = "" ;
   this.A143SecFunctionalityDescription = "" ;
   this.A144SecFunctionalityType = 0 ;
   this.A137SecParentFunctionalityId = 0 ;
   this.A146SecParentFunctionalityDescription = "" ;
   this.A142SecFunctionalityActive = false ;
   this.AV34ManageFiltersExecutionStep = 0 ;
   this.AV72ColumnsSelector = {Columns:[]} ;
   this.AV41TFSecFunctionalityKey = "" ;
   this.AV42TFSecFunctionalityKey_Sel = "" ;
   this.AV45TFSecFunctionalityDescription = "" ;
   this.AV46TFSecFunctionalityDescription_Sel = "" ;
   this.AV81TFSecFunctionalityType_Sels = [ ] ;
   this.AV52TFSecParentFunctionalityDescription = "" ;
   this.AV53TFSecParentFunctionalityDescription_Sel = "" ;
   this.AV99Pgmname = "" ;
   this.AV29OrderedBy = 0 ;
   this.AV30OrderedDsc = false ;
   this.AV18IsAuthorized_Update = false ;
   this.AV19IsAuthorized_Delete = false ;
   this.AV27GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",CollapsedRecords:"",GroupBy:"",FilterValues:[],DynamicFilters:[]} ;
   this.AV80TFSecFunctionalityType_SelsJson = "" ;
   this.Events = {"e122q2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e132q2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e142q2_client": ["DDO_GRID.ONOPTIONCLICKED", true] ,"e152q2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e112q2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e162q2_client": ["'DOINSERT'", true] ,"e172q2_client": ["'DOEXPORT'", true] ,"e182q2_client": ["'DOEXPORTREPORT'", true] ,"e222q2_client": ["ENTER", true] ,"e232q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true}],[{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYKEY","Visible")',ctrl:'SECFUNCTIONALITYKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYDESCRIPTION","Visible")',ctrl:'SECFUNCTIONALITYDESCRIPTION',prop:'Visible'},{ctrl:'SECFUNCTIONALITYTYPE'},{av:'gx.fn.getCtrlProperty("SECPARENTFUNCTIONALITYDESCRIPTION","Visible")',ctrl:'SECPARENTFUNCTIONALITYDESCRIPTION',prop:'Visible'},{av:'AV83GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV84GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV38ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV27GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV27GridState',fld:'vGRIDSTATE',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV80TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''}],[{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{av:'this.DDO_GRIDContainer.GridInternalName',ctrl:'DDO_GRID',prop:'GridInternalName'},{ctrl:'FORM',prop:'Caption'},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV55DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'gx.fn.getCtrlProperty("TEXTBLOCKTITLE","Caption")',ctrl:'TEXTBLOCKTITLE',prop:'Caption'},{av:'AV38ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV27GridState',fld:'vGRIDSTATE',pic:''},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV80TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_GRID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.ActiveEventKey',ctrl:'DDO_GRID',prop:'ActiveEventKey'},{av:'this.DDO_GRIDContainer.SelectedValue_get',ctrl:'DDO_GRID',prop:'SelectedValue_get'},{av:'this.DDO_GRIDContainer.SelectedColumn',ctrl:'DDO_GRID',prop:'SelectedColumn'},{av:'this.DDO_GRIDContainer.FilteredText_get',ctrl:'DDO_GRID',prop:'FilteredText_get'}],[{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV80TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'A137SecParentFunctionalityId',fld:'SECPARENTFUNCTIONALITYID',pic:'ZZZZZZZZZ9'}],[{av:'AV86Display',fld:'vDISPLAY',pic:''},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:'vDISPLAY',prop:'Link'},{av:'AV11Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV12Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'AV24UAViewChildren',fld:'vUAVIEWCHILDREN',pic:''},{av:'gx.fn.getCtrlProperty("vUAVIEWCHILDREN","Tooltiptext")',ctrl:'vUAVIEWCHILDREN',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vUAVIEWCHILDREN","Link")',ctrl:'vUAVIEWCHILDREN',prop:'Link'},{av:'gx.fn.getCtrlProperty("vUAVIEWCHILDREN","Class")',ctrl:'vUAVIEWCHILDREN',prop:'Class'},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYDESCRIPTION","Link")',ctrl:'SECFUNCTIONALITYDESCRIPTION',prop:'Link'},{av:'gx.fn.getCtrlProperty("SECPARENTFUNCTIONALITYDESCRIPTION","Link")',ctrl:'SECPARENTFUNCTIONALITYDESCRIPTION',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYKEY","Visible")',ctrl:'SECFUNCTIONALITYKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYDESCRIPTION","Visible")',ctrl:'SECFUNCTIONALITYDESCRIPTION',prop:'Visible'},{ctrl:'SECFUNCTIONALITYTYPE'},{av:'gx.fn.getCtrlProperty("SECPARENTFUNCTIONALITYDESCRIPTION","Visible")',ctrl:'SECPARENTFUNCTIONALITYDESCRIPTION',prop:'Visible'},{av:'AV83GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV84GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV38ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV27GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV27GridState',fld:'vGRIDSTATE',pic:''},{av:'AV80TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''}],[{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV27GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV80TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYKEY","Visible")',ctrl:'SECFUNCTIONALITYKEY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("SECFUNCTIONALITYDESCRIPTION","Visible")',ctrl:'SECFUNCTIONALITYDESCRIPTION',prop:'Visible'},{ctrl:'SECFUNCTIONALITYTYPE'},{av:'gx.fn.getCtrlProperty("SECPARENTFUNCTIONALITYDESCRIPTION","Visible")',ctrl:'SECPARENTFUNCTIONALITYDESCRIPTION',prop:'Visible'},{av:'AV83GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV84GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV38ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A136SecFunctionalityId',fld:'SECFUNCTIONALITYID',pic:'ZZZZZZZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV27GridState',fld:'vGRIDSTATE',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV80TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''}],[{av:'AV27GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV80TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV27GridState',fld:'vGRIDSTATE',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV80TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV27GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV30OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'vSECFUNCTIONALITYTYPE'},{av:'AV23SecFunctionalityType',fld:'vSECFUNCTIONALITYTYPE',pic:'Z9'},{ctrl:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR'},{av:'AV31SecFunctionalityDescriptionOperator',fld:'vSECFUNCTIONALITYDESCRIPTIONOPERATOR',pic:'ZZZ9'},{av:'AV10SecFunctionalityDescription',fld:'vSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV34ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV72ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV41TFSecFunctionalityKey',fld:'vTFSECFUNCTIONALITYKEY',pic:''},{av:'AV42TFSecFunctionalityKey_Sel',fld:'vTFSECFUNCTIONALITYKEY_SEL',pic:''},{av:'AV45TFSecFunctionalityDescription',fld:'vTFSECFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV46TFSecFunctionalityDescription_Sel',fld:'vTFSECFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV81TFSecFunctionalityType_Sels',fld:'vTFSECFUNCTIONALITYTYPE_SELS',pic:''},{av:'AV52TFSecParentFunctionalityDescription',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION',pic:''},{av:'AV53TFSecParentFunctionalityDescription_Sel',fld:'vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL',pic:''},{av:'AV99Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV19IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'AV80TFSecFunctionalityType_SelsJson',fld:'vTFSECFUNCTIONALITYTYPE_SELSJSON',pic:''},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'}]];
   this.EvtParms["VALIDV_SECFUNCTIONALITYTYPE"] = [[],[]];
   this.EvtParms["VALID_SECPARENTFUNCTIONALITYID"] = [[],[]];
   this.setVCMap("AV34ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV72ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV41TFSecFunctionalityKey", "vTFSECFUNCTIONALITYKEY", 0, "svchar", 100, 0);
   this.setVCMap("AV42TFSecFunctionalityKey_Sel", "vTFSECFUNCTIONALITYKEY_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV45TFSecFunctionalityDescription", "vTFSECFUNCTIONALITYDESCRIPTION", 0, "svchar", 100, 0);
   this.setVCMap("AV46TFSecFunctionalityDescription_Sel", "vTFSECFUNCTIONALITYDESCRIPTION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV81TFSecFunctionalityType_Sels", "vTFSECFUNCTIONALITYTYPE_SELS", 0, "Collint", 0, 0);
   this.setVCMap("AV52TFSecParentFunctionalityDescription", "vTFSECPARENTFUNCTIONALITYDESCRIPTION", 0, "svchar", 100, 0);
   this.setVCMap("AV53TFSecParentFunctionalityDescription_Sel", "vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV99Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV29OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV30OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV18IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV19IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV27GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV80TFSecFunctionalityType_SelsJson", "vTFSECFUNCTIONALITYTYPE_SELSJSON", 0, "vchar", 2097152, 0);
   this.setVCMap("AV34ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV72ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV41TFSecFunctionalityKey", "vTFSECFUNCTIONALITYKEY", 0, "svchar", 100, 0);
   this.setVCMap("AV42TFSecFunctionalityKey_Sel", "vTFSECFUNCTIONALITYKEY_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV45TFSecFunctionalityDescription", "vTFSECFUNCTIONALITYDESCRIPTION", 0, "svchar", 100, 0);
   this.setVCMap("AV46TFSecFunctionalityDescription_Sel", "vTFSECFUNCTIONALITYDESCRIPTION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV81TFSecFunctionalityType_Sels", "vTFSECFUNCTIONALITYTYPE_SELS", 0, "Collint", 0, 0);
   this.setVCMap("AV52TFSecParentFunctionalityDescription", "vTFSECPARENTFUNCTIONALITYDESCRIPTION", 0, "svchar", 100, 0);
   this.setVCMap("AV53TFSecParentFunctionalityDescription_Sel", "vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV99Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV29OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV30OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV18IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV19IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV34ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV72ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV41TFSecFunctionalityKey", "vTFSECFUNCTIONALITYKEY", 0, "svchar", 100, 0);
   this.setVCMap("AV42TFSecFunctionalityKey_Sel", "vTFSECFUNCTIONALITYKEY_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV45TFSecFunctionalityDescription", "vTFSECFUNCTIONALITYDESCRIPTION", 0, "svchar", 100, 0);
   this.setVCMap("AV46TFSecFunctionalityDescription_Sel", "vTFSECFUNCTIONALITYDESCRIPTION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV81TFSecFunctionalityType_Sels", "vTFSECFUNCTIONALITYTYPE_SELS", 0, "Collint", 0, 0);
   this.setVCMap("AV52TFSecParentFunctionalityDescription", "vTFSECPARENTFUNCTIONALITYDESCRIPTION", 0, "svchar", 100, 0);
   this.setVCMap("AV53TFSecParentFunctionalityDescription_Sel", "vTFSECPARENTFUNCTIONALITYDESCRIPTION_SEL", 0, "svchar", 100, 0);
   this.setVCMap("AV99Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV29OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV30OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV18IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV19IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar({rfrVar:"AV34ManageFiltersExecutionStep"});
   GridContainer.addRefreshingVar({rfrVar:"AV72ColumnsSelector"});
   GridContainer.addRefreshingVar({rfrVar:"AV41TFSecFunctionalityKey"});
   GridContainer.addRefreshingVar({rfrVar:"AV42TFSecFunctionalityKey_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV45TFSecFunctionalityDescription"});
   GridContainer.addRefreshingVar({rfrVar:"AV46TFSecFunctionalityDescription_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV81TFSecFunctionalityType_Sels"});
   GridContainer.addRefreshingVar({rfrVar:"AV52TFSecParentFunctionalityDescription"});
   GridContainer.addRefreshingVar({rfrVar:"AV53TFSecParentFunctionalityDescription_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV99Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV29OrderedBy"});
   GridContainer.addRefreshingVar({rfrVar:"AV30OrderedDsc"});
   GridContainer.addRefreshingVar({rfrVar:"AV18IsAuthorized_Update"});
   GridContainer.addRefreshingVar({rfrVar:"AV19IsAuthorized_Delete"});
   GridContainer.addRefreshingParm(this.GXValidFnc[35]);
   GridContainer.addRefreshingParm(this.GXValidFnc[47]);
   GridContainer.addRefreshingParm(this.GXValidFnc[50]);
   GridContainer.addRefreshingParm({rfrVar:"AV34ManageFiltersExecutionStep"});
   GridContainer.addRefreshingParm({rfrVar:"AV72ColumnsSelector"});
   GridContainer.addRefreshingParm({rfrVar:"AV41TFSecFunctionalityKey"});
   GridContainer.addRefreshingParm({rfrVar:"AV42TFSecFunctionalityKey_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV45TFSecFunctionalityDescription"});
   GridContainer.addRefreshingParm({rfrVar:"AV46TFSecFunctionalityDescription_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV81TFSecFunctionalityType_Sels"});
   GridContainer.addRefreshingParm({rfrVar:"AV52TFSecParentFunctionalityDescription"});
   GridContainer.addRefreshingParm({rfrVar:"AV53TFSecParentFunctionalityDescription_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV99Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV29OrderedBy"});
   GridContainer.addRefreshingParm({rfrVar:"AV30OrderedDsc"});
   GridContainer.addRefreshingParm({rfrVar:"AV18IsAuthorized_Update"});
   GridContainer.addRefreshingParm({rfrVar:"AV19IsAuthorized_Delete"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secfunctionalityww);});
