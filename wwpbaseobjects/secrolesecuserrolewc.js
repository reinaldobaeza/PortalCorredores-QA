/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:54.83
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secrolesecuserrolewc', true, function (CmpContext) {
   this.ServerClass =  "wwpbaseobjects.secrolesecuserrolewc" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.anyGridBaseTable = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV41ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV55Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV17OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV14GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV29DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV21DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV25DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV52IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY") ;
      this.AV34IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV33IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV13IsAuthorized_SecUserName=gx.fn.getControlValue("vISAUTHORIZED_SECUSERNAME") ;
      this.AV8SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.AV8SecRoleId=gx.fn.getIntegerValue("vSECROLEID",'.') ;
      this.AV41ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV55Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV17OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV14GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV29DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV21DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV25DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV52IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY") ;
      this.AV34IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV33IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV13IsAuthorized_SecUserName=gx.fn.getControlValue("vISAUTHORIZED_SECUSERNAME") ;
   };
   this.Valid_Secuserid=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(99);
      return this.validCliEvt("Valid_Secuserid", 99, function () {
      try {
         if(  gx.fn.currentGridRowImpl(99) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SECUSERID", gx.fn.currentGridRowImpl(99));
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
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vSECUSERNAME1","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", false );
      if ( this.AV18DynamicFiltersSelector1 == "SECUSERNAME" )
      {
         gx.fn.setCtrlProperty("vSECUSERNAME1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vSECUSERNAME2","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", false );
      if ( this.AV22DynamicFiltersSelector2 == "SECUSERNAME" )
      {
         gx.fn.setCtrlProperty("vSECUSERNAME2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
   };
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vSECUSERNAME3","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", false );
      if ( this.AV26DynamicFiltersSelector3 == "SECUSERNAME" )
      {
         gx.fn.setCtrlProperty("vSECUSERNAME3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
   };
   this.s192_client=function()
   {
      this.DDO_GRIDContainer.SortedStatus =  "-1:"+(this.AV17OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.s202_client=function()
   {
      if ( ! this.AV30DynamicFiltersIgnoreFirst )
      {
         this.AV16GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV16GridStateDynamicFilter.Selected =  this.AV18DynamicFiltersSelector1  ;
         if ( ( this.AV18DynamicFiltersSelector1 == "SECUSERNAME" ) && ! ((''==this.AV20SecUserName1)) )
         {
            this.AV16GridStateDynamicFilter.Value =  this.AV20SecUserName1  ;
            this.AV16GridStateDynamicFilter.Operator = gx.num.trunc( this.AV19DynamicFiltersOperator1 ,0) ;
         }
         if ( this.AV29DynamicFiltersRemoving || ! ((''==this.AV16GridStateDynamicFilter.Value)) )
         {
            this.AV14GridState.DynamicFilters.push(this.AV16GridStateDynamicFilter) ;
         }
      }
      if ( this.AV21DynamicFiltersEnabled2 )
      {
         this.AV16GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV16GridStateDynamicFilter.Selected =  this.AV22DynamicFiltersSelector2  ;
         if ( ( this.AV22DynamicFiltersSelector2 == "SECUSERNAME" ) && ! ((''==this.AV24SecUserName2)) )
         {
            this.AV16GridStateDynamicFilter.Value =  this.AV24SecUserName2  ;
            this.AV16GridStateDynamicFilter.Operator = gx.num.trunc( this.AV23DynamicFiltersOperator2 ,0) ;
         }
         if ( this.AV29DynamicFiltersRemoving || ! ((''==this.AV16GridStateDynamicFilter.Value)) )
         {
            this.AV14GridState.DynamicFilters.push(this.AV16GridStateDynamicFilter) ;
         }
      }
      if ( this.AV25DynamicFiltersEnabled3 )
      {
         this.AV16GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV16GridStateDynamicFilter.Selected =  this.AV26DynamicFiltersSelector3  ;
         if ( ( this.AV26DynamicFiltersSelector3 == "SECUSERNAME" ) && ! ((''==this.AV28SecUserName3)) )
         {
            this.AV16GridStateDynamicFilter.Value =  this.AV28SecUserName3  ;
            this.AV16GridStateDynamicFilter.Operator = gx.num.trunc( this.AV27DynamicFiltersOperator3 ,0) ;
         }
         if ( this.AV29DynamicFiltersRemoving || ! ((''==this.AV16GridStateDynamicFilter.Value)) )
         {
            this.AV14GridState.DynamicFilters.push(this.AV16GridStateDynamicFilter) ;
         }
      }
   };
   this.s212_client=function()
   {
      this.AV21DynamicFiltersEnabled2 =  false  ;
      this.AV22DynamicFiltersSelector2 =  "SECUSERNAME"  ;
      this.AV23DynamicFiltersOperator2 = gx.num.trunc( 0 ,0) ;
      this.AV24SecUserName2 =  ''  ;
      this.s132_client();
      this.AV25DynamicFiltersEnabled3 =  false  ;
      this.AV26DynamicFiltersSelector3 =  "SECUSERNAME"  ;
      this.AV27DynamicFiltersOperator3 = gx.num.trunc( 0 ,0) ;
      this.AV28SecUserName3 =  ''  ;
      this.s142_client();
   };
   this.e12362_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e13362_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e14362_client=function()
   {
      return this.executeServerEvent("DDO_GRID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e15362_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e16362_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e17362_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS3'", true, null, false, false);
   };
   this.e11362_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e18362_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e19362_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR1.CLICK", true, null, false, true);
   };
   this.e20362_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e21362_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR2.CLICK", true, null, false, true);
   };
   this.e22362_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR3.CLICK", true, null, false, true);
   };
   this.e26362_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27362_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,20,23,26,28,29,31,33,36,37,39,40,42,45,47,50,52,53,55,57,60,61,63,64,66,69,71,74,76,77,79,81,84,85,87,88,90,93,94,95,96,97,98,100,101,102,103,104,105,106,108,109,110,111,113];
   this.GXLastCtrlId =113;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",99,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.secrolesecuserrolewc",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Display",100,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Update",101,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",102,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(141,103,"SECUSERID","User Id","","SecUserId","int",0,"px",4,4,"right",null,[],141,"SecUserId",false,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(149,104,"SECUSERNAME","User Name","","SecUserName","svchar",0,"px",100,80,"left",null,[],149,"SecUserName",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 107, 29, "DVelop_DVPaginationBar", this.CmpContext + "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV49GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV49GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV50GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV50GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV50GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e12362_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e13362_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_GRIDContainer = gx.uc.getNew(this, 112, 29, "DDOGridTitleSettingsM", this.CmpContext + "DDO_GRIDContainer", "Ddo_grid", "DDO_GRID");
   var DDO_GRIDContainer = this.DDO_GRIDContainer;
   DDO_GRIDContainer.setProp("Class", "Class", "", "char");
   DDO_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   DDO_GRIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_GRIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_GRIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_GRIDContainer.setProp("Tooltip", "Tooltip", "", "str");
   DDO_GRIDContainer.setProp("Cls", "Cls", "", "str");
   DDO_GRIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_GRIDContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_GRIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_GRIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_GRIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumn", "Selectedcolumn", "", "char");
   DDO_GRIDContainer.setProp("SelectedColumnFixedFilter", "Selectedcolumnfixedfilter", "", "char");
   DDO_GRIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_GRIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "", "str");
   DDO_GRIDContainer.setProp("Visible", "Visible", "", "str");
   DDO_GRIDContainer.setDynProp("GridInternalName", "Gridinternalname", "", "str");
   DDO_GRIDContainer.setProp("ColumnIds", "Columnids", "4:SecUserName", "str");
   DDO_GRIDContainer.setProp("ColumnsSortValues", "Columnssortvalues", "-1", "str");
   DDO_GRIDContainer.setProp("IncludeSortASC", "Includesortasc", "T", "str");
   DDO_GRIDContainer.setProp("IncludeSortDSC", "Includesortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroup", "Allowgroup", "", "str");
   DDO_GRIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_GRIDContainer.setProp("IncludeFilter", "Includefilter", "", "str");
   DDO_GRIDContainer.setProp("FilterType", "Filtertype", "", "str");
   DDO_GRIDContainer.setProp("FilterIsRange", "Filterisrange", "", "str");
   DDO_GRIDContainer.setProp("IncludeDataList", "Includedatalist", "", "str");
   DDO_GRIDContainer.setProp("DataListType", "Datalisttype", "", "str");
   DDO_GRIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", "", "str");
   DDO_GRIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "str");
   DDO_GRIDContainer.setProp("DataListProc", "Datalistproc", "", "str");
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
   DDO_GRIDContainer.setProp("SearchButtonText", "Searchbuttontext", "", "str");
   DDO_GRIDContainer.addV2CFunction('AV39DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV39DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV39DDO_TitleSettingsIcons); });
   DDO_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDContainer.addEventHandler("OnOptionClicked", this.e14362_client);
   this.setUserControl(DDO_GRIDContainer);
   this.DDO_MANAGEFILTERSContainer = gx.uc.getNew(this, 18, 0, "BootstrapDropDownOptions", this.CmpContext + "DDO_MANAGEFILTERSContainer", "Ddo_managefilters", "DDO_MANAGEFILTERS");
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
   DDO_MANAGEFILTERSContainer.addV2CFunction('AV45ManageFiltersData', "vMANAGEFILTERSDATA", 'SetDropDownOptionsData');
   DDO_MANAGEFILTERSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45ManageFiltersData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",UC.ParentObject.AV45ManageFiltersData); });
   DDO_MANAGEFILTERSContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   DDO_MANAGEFILTERSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e11362_client);
   this.setUserControl(DDO_MANAGEFILTERSContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEGRIDHEADER",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLEHEADER",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TABLERIGHTHEADER",grid:0};
   GXValidFnc[20]={ id: 20, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[23]={ id: 23, fld:"TABLEDYNAMICFILTERS",grid:0};
   GXValidFnc[26]={ id: 26, fld:"DYNAMICFILTERSPREFIX1", format:0,grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR1",gxz:"ZV18DynamicFiltersSelector1",gxold:"OV18DynamicFiltersSelector1",gxvar:"AV18DynamicFiltersSelector1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV18DynamicFiltersSelector1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV18DynamicFiltersSelector1=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR1",gx.O.AV18DynamicFiltersSelector1)},c2v:function(){if(this.val()!==undefined)gx.O.AV18DynamicFiltersSelector1=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR1")},nac:gx.falseFn,evt:"e19362_client"};
   GXValidFnc[31]={ id: 31, fld:"DYNAMICFILTERSMIDDLE1", format:0,grid:0};
   GXValidFnc[33]={ id: 33, fld:"TABLEMERGEDDYNAMICFILTERS1",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR1",gxz:"ZV19DynamicFiltersOperator1",gxold:"OV19DynamicFiltersOperator1",gxvar:"AV19DynamicFiltersOperator1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV19DynamicFiltersOperator1=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV19DynamicFiltersOperator1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR1",gx.O.AV19DynamicFiltersOperator1)},c2v:function(){if(this.val()!==undefined)gx.O.AV19DynamicFiltersOperator1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR1",'.')},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERNAME1",gxz:"ZV20SecUserName1",gxold:"OV20SecUserName1",gxvar:"AV20SecUserName1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20SecUserName1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20SecUserName1=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME1",gx.O.AV20SecUserName1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV20SecUserName1=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME1")},nac:gx.falseFn};
   GXValidFnc[42]={ id: 42, fld:"UNNAMEDTABLEDYNAMICFILTERS_1",grid:0};
   GXValidFnc[45]={ id: 45, fld:"ADDDYNAMICFILTERS1",grid:0,evt:"e18362_client"};
   GXValidFnc[47]={ id: 47, fld:"REMOVEDYNAMICFILTERS1",grid:0,evt:"e15362_client"};
   GXValidFnc[50]={ id: 50, fld:"DYNAMICFILTERSPREFIX2", format:0,grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR2",gxz:"ZV22DynamicFiltersSelector2",gxold:"OV22DynamicFiltersSelector2",gxvar:"AV22DynamicFiltersSelector2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV22DynamicFiltersSelector2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22DynamicFiltersSelector2=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR2",gx.O.AV22DynamicFiltersSelector2)},c2v:function(){if(this.val()!==undefined)gx.O.AV22DynamicFiltersSelector2=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR2")},nac:gx.falseFn,evt:"e21362_client"};
   GXValidFnc[55]={ id: 55, fld:"DYNAMICFILTERSMIDDLE2", format:0,grid:0};
   GXValidFnc[57]={ id: 57, fld:"TABLEMERGEDDYNAMICFILTERS2",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR2",gxz:"ZV23DynamicFiltersOperator2",gxold:"OV23DynamicFiltersOperator2",gxvar:"AV23DynamicFiltersOperator2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV23DynamicFiltersOperator2=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV23DynamicFiltersOperator2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR2",gx.O.AV23DynamicFiltersOperator2)},c2v:function(){if(this.val()!==undefined)gx.O.AV23DynamicFiltersOperator2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR2",'.')},nac:gx.falseFn};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERNAME2",gxz:"ZV24SecUserName2",gxold:"OV24SecUserName2",gxvar:"AV24SecUserName2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV24SecUserName2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24SecUserName2=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME2",gx.O.AV24SecUserName2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV24SecUserName2=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME2")},nac:gx.falseFn};
   GXValidFnc[66]={ id: 66, fld:"UNNAMEDTABLEDYNAMICFILTERS_2",grid:0};
   GXValidFnc[69]={ id: 69, fld:"ADDDYNAMICFILTERS2",grid:0,evt:"e20362_client"};
   GXValidFnc[71]={ id: 71, fld:"REMOVEDYNAMICFILTERS2",grid:0,evt:"e16362_client"};
   GXValidFnc[74]={ id: 74, fld:"DYNAMICFILTERSPREFIX3", format:0,grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR3",gxz:"ZV26DynamicFiltersSelector3",gxold:"OV26DynamicFiltersSelector3",gxvar:"AV26DynamicFiltersSelector3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV26DynamicFiltersSelector3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26DynamicFiltersSelector3=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR3",gx.O.AV26DynamicFiltersSelector3)},c2v:function(){if(this.val()!==undefined)gx.O.AV26DynamicFiltersSelector3=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR3")},nac:gx.falseFn,evt:"e22362_client"};
   GXValidFnc[79]={ id: 79, fld:"DYNAMICFILTERSMIDDLE3", format:0,grid:0};
   GXValidFnc[81]={ id: 81, fld:"TABLEMERGEDDYNAMICFILTERS3",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR3",gxz:"ZV27DynamicFiltersOperator3",gxold:"OV27DynamicFiltersOperator3",gxvar:"AV27DynamicFiltersOperator3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV27DynamicFiltersOperator3=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV27DynamicFiltersOperator3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR3",gx.O.AV27DynamicFiltersOperator3)},c2v:function(){if(this.val()!==undefined)gx.O.AV27DynamicFiltersOperator3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR3",'.')},nac:gx.falseFn};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECUSERNAME3",gxz:"ZV28SecUserName3",gxold:"OV28SecUserName3",gxvar:"AV28SecUserName3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28SecUserName3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28SecUserName3=Value},v2c:function(){gx.fn.setControlValue("vSECUSERNAME3",gx.O.AV28SecUserName3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV28SecUserName3=this.val()},val:function(){return gx.fn.getControlValue("vSECUSERNAME3")},nac:gx.falseFn};
   GXValidFnc[90]={ id: 90, fld:"UNNAMEDTABLEDYNAMICFILTERS_3",grid:0};
   GXValidFnc[93]={ id: 93, fld:"REMOVEDYNAMICFILTERS3",grid:0,evt:"e17362_client"};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[100]={ id:100 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV51Display",gxold:"OV51Display",gxvar:"AV51Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV51Display=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51Display=Value},v2c:function(row){gx.fn.setGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(99),gx.O.AV51Display,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV51Display=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[101]={ id:101 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV32Update",gxold:"OV32Update",gxvar:"AV32Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV32Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(99),gx.O.AV32Update,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV32Update=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[102]={ id:102 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV31Delete",gxold:"OV31Delete",gxvar:"AV31Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV31Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(99),gx.O.AV31Delete,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV31Delete=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[103]={ id:103 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:this.Valid_Secuserid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERID",gxz:"Z141SecUserId",gxold:"O141SecUserId",gxvar:"A141SecUserId",ucs:[],op:[104],ip:[104,103],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A141SecUserId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z141SecUserId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECUSERID",row || gx.fn.currentGridRowImpl(99),gx.O.A141SecUserId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A141SecUserId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECUSERID",row || gx.fn.currentGridRowImpl(99),'.')},nac:gx.falseFn};
   GXValidFnc[104]={ id:104 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERNAME",gxz:"Z149SecUserName",gxold:"O149SecUserName",gxvar:"A149SecUserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A149SecUserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z149SecUserName=Value},v2c:function(row){gx.fn.setGridControlValue("SECUSERNAME",row || gx.fn.currentGridRowImpl(99),gx.O.A149SecUserName,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A149SecUserName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECUSERNAME",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[105]={ id: 105, fld:"",grid:0};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[111]={ id: 111, fld:"JSDYNAMICFILTERS", format:1,grid:0};
   GXValidFnc[113]={ id:113 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEID",gxz:"Z139SecRoleId",gxold:"O139SecRoleId",gxvar:"A139SecRoleId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A139SecRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z139SecRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECROLEID",gx.O.A139SecRoleId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A139SecRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECROLEID",'.')},nac:gx.falseFn};
   this.AV18DynamicFiltersSelector1 = "" ;
   this.ZV18DynamicFiltersSelector1 = "" ;
   this.OV18DynamicFiltersSelector1 = "" ;
   this.AV19DynamicFiltersOperator1 = 0 ;
   this.ZV19DynamicFiltersOperator1 = 0 ;
   this.OV19DynamicFiltersOperator1 = 0 ;
   this.AV20SecUserName1 = "" ;
   this.ZV20SecUserName1 = "" ;
   this.OV20SecUserName1 = "" ;
   this.AV22DynamicFiltersSelector2 = "" ;
   this.ZV22DynamicFiltersSelector2 = "" ;
   this.OV22DynamicFiltersSelector2 = "" ;
   this.AV23DynamicFiltersOperator2 = 0 ;
   this.ZV23DynamicFiltersOperator2 = 0 ;
   this.OV23DynamicFiltersOperator2 = 0 ;
   this.AV24SecUserName2 = "" ;
   this.ZV24SecUserName2 = "" ;
   this.OV24SecUserName2 = "" ;
   this.AV26DynamicFiltersSelector3 = "" ;
   this.ZV26DynamicFiltersSelector3 = "" ;
   this.OV26DynamicFiltersSelector3 = "" ;
   this.AV27DynamicFiltersOperator3 = 0 ;
   this.ZV27DynamicFiltersOperator3 = 0 ;
   this.OV27DynamicFiltersOperator3 = 0 ;
   this.AV28SecUserName3 = "" ;
   this.ZV28SecUserName3 = "" ;
   this.OV28SecUserName3 = "" ;
   this.ZV51Display = "" ;
   this.OV51Display = "" ;
   this.ZV32Update = "" ;
   this.OV32Update = "" ;
   this.ZV31Delete = "" ;
   this.OV31Delete = "" ;
   this.Z141SecUserId = 0 ;
   this.O141SecUserId = 0 ;
   this.Z149SecUserName = "" ;
   this.O149SecUserName = "" ;
   this.A139SecRoleId = 0 ;
   this.Z139SecRoleId = 0 ;
   this.O139SecRoleId = 0 ;
   this.AV45ManageFiltersData = [ ] ;
   this.AV18DynamicFiltersSelector1 = "" ;
   this.AV19DynamicFiltersOperator1 = 0 ;
   this.AV20SecUserName1 = "" ;
   this.AV22DynamicFiltersSelector2 = "" ;
   this.AV23DynamicFiltersOperator2 = 0 ;
   this.AV24SecUserName2 = "" ;
   this.AV26DynamicFiltersSelector3 = "" ;
   this.AV27DynamicFiltersOperator3 = 0 ;
   this.AV28SecUserName3 = "" ;
   this.AV49GridCurrentPage = 0 ;
   this.AV39DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.A139SecRoleId = 0 ;
   this.AV8SecRoleId = 0 ;
   this.AV51Display = "" ;
   this.AV32Update = "" ;
   this.AV31Delete = "" ;
   this.A141SecUserId = 0 ;
   this.A149SecUserName = "" ;
   this.AV41ManageFiltersExecutionStep = 0 ;
   this.AV55Pgmname = "" ;
   this.AV17OrderedDsc = false ;
   this.AV14GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",CollapsedRecords:"",GroupBy:"",FilterValues:[],DynamicFilters:[]} ;
   this.AV30DynamicFiltersIgnoreFirst = false ;
   this.AV29DynamicFiltersRemoving = false ;
   this.AV21DynamicFiltersEnabled2 = false ;
   this.AV25DynamicFiltersEnabled3 = false ;
   this.AV52IsAuthorized_Display = false ;
   this.AV34IsAuthorized_Update = false ;
   this.AV33IsAuthorized_Delete = false ;
   this.AV13IsAuthorized_SecUserName = false ;
   this.AV16GridStateDynamicFilter = {Selected:"",Value:"",Operator:0,ValueTo:""} ;
   this.Events = {"e12362_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e13362_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e14362_client": ["DDO_GRID.ONOPTIONCLICKED", true] ,"e15362_client": ["'REMOVEDYNAMICFILTERS1'", true] ,"e16362_client": ["'REMOVEDYNAMICFILTERS2'", true] ,"e17362_client": ["'REMOVEDYNAMICFILTERS3'", true] ,"e11362_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e18362_client": ["'ADDDYNAMICFILTERS1'", true] ,"e19362_client": ["VDYNAMICFILTERSSELECTOR1.CLICK", true] ,"e20362_client": ["'ADDDYNAMICFILTERS2'", true] ,"e21362_client": ["VDYNAMICFILTERSSELECTOR2.CLICK", true] ,"e22362_client": ["VDYNAMICFILTERSSELECTOR3.CLICK", true] ,"e26362_client": ["ENTER", true] ,"e27362_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV30DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'}],[{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV49GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV50GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV45ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Jsonclick")',ctrl:'ADDDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Jsonclick")',ctrl:'ADDDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS3","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS3',prop:'Jsonclick'},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.GridInternalName',ctrl:'DDO_GRID',prop:'GridInternalName'},{av:'gx.fn.getCtrlProperty("SECROLEID","Visible")',ctrl:'SECROLEID',prop:'Visible'},{av:'AV39DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV45ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV30DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV30DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_GRID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV30DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.DDO_GRIDContainer.ActiveEventKey',ctrl:'DDO_GRID',prop:'ActiveEventKey'}],[{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true}],[{av:'AV51Display',fld:'vDISPLAY',pic:''},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:'vDISPLAY',prop:'Link'},{av:'AV32Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV31Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("SECUSERNAME","Link")',ctrl:'SECUSERNAME',prop:'Link'}]];
   this.EvtParms["'ADDDYNAMICFILTERS1'"] = [[],[{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV30DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV30DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV49GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV50GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV45ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR1.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'}]];
   this.EvtParms["'ADDDYNAMICFILTERS2'"] = [[],[{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV30DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV49GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV50GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV45ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR2.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS3'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV30DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV49GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV50GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV45ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR3.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'AV8SecRoleId',fld:'vSECROLEID',pic:'ZZZ9'},{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV30DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV29DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV13IsAuthorized_SecUserName',fld:'vISAUTHORIZED_SECUSERNAME',pic:'',hsh:true},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'}],[{av:'AV41ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV14GridState',fld:'vGRIDSTATE',pic:''},{av:'AV17OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV18DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV19DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV20SecUserName1',fld:'vSECUSERNAME1',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV21DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV22DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV23DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV24SecUserName2',fld:'vSECUSERNAME2',pic:''},{av:'AV25DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV26DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV27DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV28SecUserName3',fld:'vSECUSERNAME3',pic:''},{av:'gx.fn.getCtrlProperty("vSECUSERNAME1","Visible")',ctrl:'vSECUSERNAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME2","Visible")',ctrl:'vSECUSERNAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECUSERNAME3","Visible")',ctrl:'vSECUSERNAME3',prop:'Visible'},{av:'AV49GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV50GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV52IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV34IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV33IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV45ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VALID_SECUSERID"] = [[{av:'A149SecUserName',fld:'SECUSERNAME',pic:''},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'}],[{av:'A149SecUserName',fld:'SECUSERNAME',pic:''}]];
   this.setVCMap("AV41ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV17OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV14GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV29DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV21DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV25DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV52IsAuthorized_Display", "vISAUTHORIZED_DISPLAY", 0, "boolean", 4, 0);
   this.setVCMap("AV34IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV33IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV13IsAuthorized_SecUserName", "vISAUTHORIZED_SECUSERNAME", 0, "boolean", 4, 0);
   this.setVCMap("AV8SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV8SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV41ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV17OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV14GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV29DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV21DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV25DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV52IsAuthorized_Display", "vISAUTHORIZED_DISPLAY", 0, "boolean", 4, 0);
   this.setVCMap("AV34IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV33IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV13IsAuthorized_SecUserName", "vISAUTHORIZED_SECUSERNAME", 0, "boolean", 4, 0);
   this.setVCMap("AV8SecRoleId", "vSECROLEID", 0, "int", 4, 0);
   this.setVCMap("AV41ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV17OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV14GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV29DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV21DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV25DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV52IsAuthorized_Display", "vISAUTHORIZED_DISPLAY", 0, "boolean", 4, 0);
   this.setVCMap("AV34IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV33IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV13IsAuthorized_SecUserName", "vISAUTHORIZED_SECUSERNAME", 0, "boolean", 4, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar({rfrVar:"AV8SecRoleId"});
   GridContainer.addRefreshingVar({rfrVar:"AV41ManageFiltersExecutionStep"});
   GridContainer.addRefreshingVar({rfrVar:"AV55Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV17OrderedDsc"});
   GridContainer.addRefreshingVar({rfrVar:"AV14GridState"});
   GridContainer.addRefreshingVar({rfrVar:"AV30DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingVar({rfrVar:"AV29DynamicFiltersRemoving"});
   GridContainer.addRefreshingVar({rfrVar:"AV21DynamicFiltersEnabled2"});
   GridContainer.addRefreshingVar({rfrVar:"AV25DynamicFiltersEnabled3"});
   GridContainer.addRefreshingVar({rfrVar:"AV52IsAuthorized_Display"});
   GridContainer.addRefreshingVar({rfrVar:"AV34IsAuthorized_Update"});
   GridContainer.addRefreshingVar({rfrVar:"AV33IsAuthorized_Delete"});
   GridContainer.addRefreshingVar({rfrVar:"AV13IsAuthorized_SecUserName"});
   GridContainer.addRefreshingVar(this.GXValidFnc[113]);
   GridContainer.addRefreshingParm(this.GXValidFnc[29]);
   GridContainer.addRefreshingParm(this.GXValidFnc[37]);
   GridContainer.addRefreshingParm(this.GXValidFnc[40]);
   GridContainer.addRefreshingParm(this.GXValidFnc[53]);
   GridContainer.addRefreshingParm(this.GXValidFnc[61]);
   GridContainer.addRefreshingParm(this.GXValidFnc[64]);
   GridContainer.addRefreshingParm(this.GXValidFnc[77]);
   GridContainer.addRefreshingParm(this.GXValidFnc[85]);
   GridContainer.addRefreshingParm(this.GXValidFnc[88]);
   GridContainer.addRefreshingParm({rfrVar:"AV8SecRoleId"});
   GridContainer.addRefreshingParm({rfrVar:"AV41ManageFiltersExecutionStep"});
   GridContainer.addRefreshingParm({rfrVar:"AV55Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV17OrderedDsc"});
   GridContainer.addRefreshingParm({rfrVar:"AV14GridState"});
   GridContainer.addRefreshingParm({rfrVar:"AV30DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingParm({rfrVar:"AV29DynamicFiltersRemoving"});
   GridContainer.addRefreshingParm({rfrVar:"AV21DynamicFiltersEnabled2"});
   GridContainer.addRefreshingParm({rfrVar:"AV25DynamicFiltersEnabled3"});
   GridContainer.addRefreshingParm({rfrVar:"AV52IsAuthorized_Display"});
   GridContainer.addRefreshingParm({rfrVar:"AV34IsAuthorized_Update"});
   GridContainer.addRefreshingParm({rfrVar:"AV33IsAuthorized_Delete"});
   GridContainer.addRefreshingParm({rfrVar:"AV13IsAuthorized_SecUserName"});
   GridContainer.addRefreshingParm(this.GXValidFnc[113]);
   this.Initialize( );
});
