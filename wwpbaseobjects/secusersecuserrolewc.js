/*!   GeneXus C# 16_0_10-142546 on 4/19/2021 23:59:55.84
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secusersecuserrolewc', true, function (CmpContext) {
   this.ServerClass =  "wwpbaseobjects.secusersecuserrolewc" ;
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
      this.AV49ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV63Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV22OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV23OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV19GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV36DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV35DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV27DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV31DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV60IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY") ;
      this.AV18IsAuthorized_SecRoleName=gx.fn.getControlValue("vISAUTHORIZED_SECROLENAME") ;
      this.AV8SecUserId=gx.fn.getIntegerValue("vSECUSERID",'.') ;
      this.AV8SecUserId=gx.fn.getIntegerValue("vSECUSERID",'.') ;
      this.AV49ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV63Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV22OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV23OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV19GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV36DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV35DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV27DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV31DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV60IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY") ;
      this.AV18IsAuthorized_SecRoleName=gx.fn.getControlValue("vISAUTHORIZED_SECROLENAME") ;
   };
   this.Valid_Secroleid=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(101);
      return this.validCliEvt("Valid_Secroleid", 101, function () {
      try {
         if(  gx.fn.currentGridRowImpl(101) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("SECROLEID", gx.fn.currentGridRowImpl(101));
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
      gx.fn.setCtrlProperty("vSECROLENAME1","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", false );
      if ( this.AV24DynamicFiltersSelector1 == "SECROLENAME" )
      {
         gx.fn.setCtrlProperty("vSECROLENAME1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vSECROLENAME2","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", false );
      if ( this.AV28DynamicFiltersSelector2 == "SECROLENAME" )
      {
         gx.fn.setCtrlProperty("vSECROLENAME2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
   };
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vSECROLENAME3","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", false );
      if ( this.AV32DynamicFiltersSelector3 == "SECROLENAME" )
      {
         gx.fn.setCtrlProperty("vSECROLENAME3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
   };
   this.s172_client=function()
   {
      this.DDO_GRIDContainer.SortedStatus =  gx.text.trim( gx.num.str( this.AV22OrderedBy, 4, 0))+":"+(this.AV23OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.s202_client=function()
   {
      if ( ! this.AV36DynamicFiltersIgnoreFirst )
      {
         this.AV21GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV21GridStateDynamicFilter.Selected =  this.AV24DynamicFiltersSelector1  ;
         if ( ( this.AV24DynamicFiltersSelector1 == "SECROLENAME" ) && ! ((''==this.AV26SecRoleName1)) )
         {
            this.AV21GridStateDynamicFilter.Value =  this.AV26SecRoleName1  ;
            this.AV21GridStateDynamicFilter.Operator = gx.num.trunc( this.AV25DynamicFiltersOperator1 ,0) ;
         }
         if ( this.AV35DynamicFiltersRemoving || ! ((''==this.AV21GridStateDynamicFilter.Value)) )
         {
            this.AV19GridState.DynamicFilters.push(this.AV21GridStateDynamicFilter) ;
         }
      }
      if ( this.AV27DynamicFiltersEnabled2 )
      {
         this.AV21GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV21GridStateDynamicFilter.Selected =  this.AV28DynamicFiltersSelector2  ;
         if ( ( this.AV28DynamicFiltersSelector2 == "SECROLENAME" ) && ! ((''==this.AV30SecRoleName2)) )
         {
            this.AV21GridStateDynamicFilter.Value =  this.AV30SecRoleName2  ;
            this.AV21GridStateDynamicFilter.Operator = gx.num.trunc( this.AV29DynamicFiltersOperator2 ,0) ;
         }
         if ( this.AV35DynamicFiltersRemoving || ! ((''==this.AV21GridStateDynamicFilter.Value)) )
         {
            this.AV19GridState.DynamicFilters.push(this.AV21GridStateDynamicFilter) ;
         }
      }
      if ( this.AV31DynamicFiltersEnabled3 )
      {
         this.AV21GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV21GridStateDynamicFilter.Selected =  this.AV32DynamicFiltersSelector3  ;
         if ( ( this.AV32DynamicFiltersSelector3 == "SECROLENAME" ) && ! ((''==this.AV34SecRoleName3)) )
         {
            this.AV21GridStateDynamicFilter.Value =  this.AV34SecRoleName3  ;
            this.AV21GridStateDynamicFilter.Operator = gx.num.trunc( this.AV33DynamicFiltersOperator3 ,0) ;
         }
         if ( this.AV35DynamicFiltersRemoving || ! ((''==this.AV21GridStateDynamicFilter.Value)) )
         {
            this.AV19GridState.DynamicFilters.push(this.AV21GridStateDynamicFilter) ;
         }
      }
   };
   this.s212_client=function()
   {
      this.AV27DynamicFiltersEnabled2 =  false  ;
      this.AV28DynamicFiltersSelector2 =  "SECROLENAME"  ;
      this.AV29DynamicFiltersOperator2 = gx.num.trunc( 0 ,0) ;
      this.AV30SecRoleName2 =  ''  ;
      this.s132_client();
      this.AV31DynamicFiltersEnabled3 =  false  ;
      this.AV32DynamicFiltersSelector3 =  "SECROLENAME"  ;
      this.AV33DynamicFiltersOperator3 = gx.num.trunc( 0 ,0) ;
      this.AV34SecRoleName3 =  ''  ;
      this.s142_client();
   };
   this.e12392_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e13392_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e14392_client=function()
   {
      return this.executeServerEvent("DDO_GRID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e15392_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e16392_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e17392_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS3'", true, null, false, false);
   };
   this.e11392_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e18392_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e19392_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR1.CLICK", true, null, false, true);
   };
   this.e20392_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e21392_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR2.CLICK", true, null, false, true);
   };
   this.e22392_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR3.CLICK", true, null, false, true);
   };
   this.e26392_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27392_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,22,25,28,30,31,33,35,38,39,41,42,44,47,49,52,54,55,57,59,62,63,65,66,68,71,73,76,78,79,81,83,86,87,89,90,92,95,96,97,98,99,100,102,103,104,105,106,107,109,110,111,112,114];
   this.GXLastCtrlId =114;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",101,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.secusersecuserrolewc",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Display",102,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(139,103,"SECROLEID","Role Id","","SecRoleId","int",0,"px",4,4,"right",null,[],139,"SecRoleId",false,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(148,104,"SECROLENAME","Role Name","","SecRoleName","svchar",0,"px",40,40,"left",null,[],148,"SecRoleName",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(147,105,"SECROLEDESCRIPTION","Role Description","","SecRoleDescription","svchar",0,"px",120,80,"left",null,[],147,"SecRoleDescription",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 108, 31, "DVelop_DVPaginationBar", this.CmpContext + "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV57GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV57GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV58GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV58GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV58GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e12392_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e13392_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_GRIDContainer = gx.uc.getNew(this, 113, 31, "DDOGridTitleSettingsM", this.CmpContext + "DDO_GRIDContainer", "Ddo_grid", "DDO_GRID");
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
   DDO_GRIDContainer.setProp("ColumnIds", "Columnids", "2:SecRoleName|3:SecRoleDescription", "str");
   DDO_GRIDContainer.setProp("ColumnsSortValues", "Columnssortvalues", "1|2", "str");
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
   DDO_GRIDContainer.addV2CFunction('AV45DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV45DDO_TitleSettingsIcons); });
   DDO_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDContainer.addEventHandler("OnOptionClicked", this.e14392_client);
   this.setUserControl(DDO_GRIDContainer);
   this.DDO_MANAGEFILTERSContainer = gx.uc.getNew(this, 20, 0, "BootstrapDropDownOptions", this.CmpContext + "DDO_MANAGEFILTERSContainer", "Ddo_managefilters", "DDO_MANAGEFILTERS");
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
   DDO_MANAGEFILTERSContainer.addV2CFunction('AV53ManageFiltersData', "vMANAGEFILTERSDATA", 'SetDropDownOptionsData');
   DDO_MANAGEFILTERSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53ManageFiltersData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",UC.ParentObject.AV53ManageFiltersData); });
   DDO_MANAGEFILTERSContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   DDO_MANAGEFILTERSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e11392_client);
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
   GXValidFnc[15]={ id: 15, fld:"TABLEACTIONS",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"TABLERIGHTHEADER",grid:0};
   GXValidFnc[22]={ id: 22, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[25]={ id: 25, fld:"TABLEDYNAMICFILTERS",grid:0};
   GXValidFnc[28]={ id: 28, fld:"DYNAMICFILTERSPREFIX1", format:0,grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id:31 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR1",gxz:"ZV24DynamicFiltersSelector1",gxold:"OV24DynamicFiltersSelector1",gxvar:"AV24DynamicFiltersSelector1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV24DynamicFiltersSelector1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24DynamicFiltersSelector1=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR1",gx.O.AV24DynamicFiltersSelector1)},c2v:function(){if(this.val()!==undefined)gx.O.AV24DynamicFiltersSelector1=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR1")},nac:gx.falseFn,evt:"e19392_client"};
   GXValidFnc[33]={ id: 33, fld:"DYNAMICFILTERSMIDDLE1", format:0,grid:0};
   GXValidFnc[35]={ id: 35, fld:"TABLEMERGEDDYNAMICFILTERS1",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR1",gxz:"ZV25DynamicFiltersOperator1",gxold:"OV25DynamicFiltersOperator1",gxvar:"AV25DynamicFiltersOperator1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV25DynamicFiltersOperator1=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV25DynamicFiltersOperator1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR1",gx.O.AV25DynamicFiltersOperator1)},c2v:function(){if(this.val()!==undefined)gx.O.AV25DynamicFiltersOperator1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR1",'.')},nac:gx.falseFn};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id:42 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECROLENAME1",gxz:"ZV26SecRoleName1",gxold:"OV26SecRoleName1",gxvar:"AV26SecRoleName1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV26SecRoleName1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26SecRoleName1=Value},v2c:function(){gx.fn.setControlValue("vSECROLENAME1",gx.O.AV26SecRoleName1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV26SecRoleName1=this.val()},val:function(){return gx.fn.getControlValue("vSECROLENAME1")},nac:gx.falseFn};
   GXValidFnc[44]={ id: 44, fld:"UNNAMEDTABLEDYNAMICFILTERS_1",grid:0};
   GXValidFnc[47]={ id: 47, fld:"ADDDYNAMICFILTERS1",grid:0,evt:"e18392_client"};
   GXValidFnc[49]={ id: 49, fld:"REMOVEDYNAMICFILTERS1",grid:0,evt:"e15392_client"};
   GXValidFnc[52]={ id: 52, fld:"DYNAMICFILTERSPREFIX2", format:0,grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id:55 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR2",gxz:"ZV28DynamicFiltersSelector2",gxold:"OV28DynamicFiltersSelector2",gxvar:"AV28DynamicFiltersSelector2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV28DynamicFiltersSelector2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28DynamicFiltersSelector2=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR2",gx.O.AV28DynamicFiltersSelector2)},c2v:function(){if(this.val()!==undefined)gx.O.AV28DynamicFiltersSelector2=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR2")},nac:gx.falseFn,evt:"e21392_client"};
   GXValidFnc[57]={ id: 57, fld:"DYNAMICFILTERSMIDDLE2", format:0,grid:0};
   GXValidFnc[59]={ id: 59, fld:"TABLEMERGEDDYNAMICFILTERS2",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id:63 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR2",gxz:"ZV29DynamicFiltersOperator2",gxold:"OV29DynamicFiltersOperator2",gxvar:"AV29DynamicFiltersOperator2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV29DynamicFiltersOperator2=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV29DynamicFiltersOperator2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR2",gx.O.AV29DynamicFiltersOperator2)},c2v:function(){if(this.val()!==undefined)gx.O.AV29DynamicFiltersOperator2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR2",'.')},nac:gx.falseFn};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECROLENAME2",gxz:"ZV30SecRoleName2",gxold:"OV30SecRoleName2",gxvar:"AV30SecRoleName2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV30SecRoleName2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30SecRoleName2=Value},v2c:function(){gx.fn.setControlValue("vSECROLENAME2",gx.O.AV30SecRoleName2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV30SecRoleName2=this.val()},val:function(){return gx.fn.getControlValue("vSECROLENAME2")},nac:gx.falseFn};
   GXValidFnc[68]={ id: 68, fld:"UNNAMEDTABLEDYNAMICFILTERS_2",grid:0};
   GXValidFnc[71]={ id: 71, fld:"ADDDYNAMICFILTERS2",grid:0,evt:"e20392_client"};
   GXValidFnc[73]={ id: 73, fld:"REMOVEDYNAMICFILTERS2",grid:0,evt:"e16392_client"};
   GXValidFnc[76]={ id: 76, fld:"DYNAMICFILTERSPREFIX3", format:0,grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR3",gxz:"ZV32DynamicFiltersSelector3",gxold:"OV32DynamicFiltersSelector3",gxvar:"AV32DynamicFiltersSelector3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV32DynamicFiltersSelector3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32DynamicFiltersSelector3=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR3",gx.O.AV32DynamicFiltersSelector3)},c2v:function(){if(this.val()!==undefined)gx.O.AV32DynamicFiltersSelector3=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR3")},nac:gx.falseFn,evt:"e22392_client"};
   GXValidFnc[81]={ id: 81, fld:"DYNAMICFILTERSMIDDLE3", format:0,grid:0};
   GXValidFnc[83]={ id: 83, fld:"TABLEMERGEDDYNAMICFILTERS3",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR3",gxz:"ZV33DynamicFiltersOperator3",gxold:"OV33DynamicFiltersOperator3",gxvar:"AV33DynamicFiltersOperator3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV33DynamicFiltersOperator3=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV33DynamicFiltersOperator3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR3",gx.O.AV33DynamicFiltersOperator3)},c2v:function(){if(this.val()!==undefined)gx.O.AV33DynamicFiltersOperator3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR3",'.')},nac:gx.falseFn};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id:90 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECROLENAME3",gxz:"ZV34SecRoleName3",gxold:"OV34SecRoleName3",gxvar:"AV34SecRoleName3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV34SecRoleName3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34SecRoleName3=Value},v2c:function(){gx.fn.setControlValue("vSECROLENAME3",gx.O.AV34SecRoleName3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV34SecRoleName3=this.val()},val:function(){return gx.fn.getControlValue("vSECROLENAME3")},nac:gx.falseFn};
   GXValidFnc[92]={ id: 92, fld:"UNNAMEDTABLEDYNAMICFILTERS_3",grid:0};
   GXValidFnc[95]={ id: 95, fld:"REMOVEDYNAMICFILTERS3",grid:0,evt:"e17392_client"};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[102]={ id:102 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:101,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV59Display",gxold:"OV59Display",gxvar:"AV59Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV59Display=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV59Display=Value},v2c:function(row){gx.fn.setGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(101),gx.O.AV59Display,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV59Display=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(101))},nac:gx.falseFn};
   GXValidFnc[103]={ id:103 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:101,gxgrid:this.GridContainer,fnc:this.Valid_Secroleid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEID",gxz:"Z139SecRoleId",gxold:"O139SecRoleId",gxvar:"A139SecRoleId",ucs:[],op:[104,105],ip:[104,105,103],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A139SecRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z139SecRoleId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECROLEID",row || gx.fn.currentGridRowImpl(101),gx.O.A139SecRoleId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A139SecRoleId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECROLEID",row || gx.fn.currentGridRowImpl(101),'.')},nac:gx.falseFn};
   GXValidFnc[104]={ id:104 ,lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:101,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLENAME",gxz:"Z148SecRoleName",gxold:"O148SecRoleName",gxvar:"A148SecRoleName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A148SecRoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z148SecRoleName=Value},v2c:function(row){gx.fn.setGridControlValue("SECROLENAME",row || gx.fn.currentGridRowImpl(101),gx.O.A148SecRoleName,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A148SecRoleName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECROLENAME",row || gx.fn.currentGridRowImpl(101))},nac:gx.falseFn};
   GXValidFnc[105]={ id:105 ,lvl:2,type:"svchar",len:120,dec:0,sign:false,ro:1,isacc:0,grid:101,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEDESCRIPTION",gxz:"Z147SecRoleDescription",gxold:"O147SecRoleDescription",gxvar:"A147SecRoleDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A147SecRoleDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z147SecRoleDescription=Value},v2c:function(row){gx.fn.setGridControlValue("SECROLEDESCRIPTION",row || gx.fn.currentGridRowImpl(101),gx.O.A147SecRoleDescription,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A147SecRoleDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECROLEDESCRIPTION",row || gx.fn.currentGridRowImpl(101))},nac:gx.falseFn};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id: 111, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[112]={ id: 112, fld:"JSDYNAMICFILTERS", format:1,grid:0};
   GXValidFnc[114]={ id:114 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECUSERID",gxz:"Z141SecUserId",gxold:"O141SecUserId",gxvar:"A141SecUserId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A141SecUserId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z141SecUserId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SECUSERID",gx.O.A141SecUserId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A141SecUserId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SECUSERID",'.')},nac:gx.falseFn};
   this.AV24DynamicFiltersSelector1 = "" ;
   this.ZV24DynamicFiltersSelector1 = "" ;
   this.OV24DynamicFiltersSelector1 = "" ;
   this.AV25DynamicFiltersOperator1 = 0 ;
   this.ZV25DynamicFiltersOperator1 = 0 ;
   this.OV25DynamicFiltersOperator1 = 0 ;
   this.AV26SecRoleName1 = "" ;
   this.ZV26SecRoleName1 = "" ;
   this.OV26SecRoleName1 = "" ;
   this.AV28DynamicFiltersSelector2 = "" ;
   this.ZV28DynamicFiltersSelector2 = "" ;
   this.OV28DynamicFiltersSelector2 = "" ;
   this.AV29DynamicFiltersOperator2 = 0 ;
   this.ZV29DynamicFiltersOperator2 = 0 ;
   this.OV29DynamicFiltersOperator2 = 0 ;
   this.AV30SecRoleName2 = "" ;
   this.ZV30SecRoleName2 = "" ;
   this.OV30SecRoleName2 = "" ;
   this.AV32DynamicFiltersSelector3 = "" ;
   this.ZV32DynamicFiltersSelector3 = "" ;
   this.OV32DynamicFiltersSelector3 = "" ;
   this.AV33DynamicFiltersOperator3 = 0 ;
   this.ZV33DynamicFiltersOperator3 = 0 ;
   this.OV33DynamicFiltersOperator3 = 0 ;
   this.AV34SecRoleName3 = "" ;
   this.ZV34SecRoleName3 = "" ;
   this.OV34SecRoleName3 = "" ;
   this.ZV59Display = "" ;
   this.OV59Display = "" ;
   this.Z139SecRoleId = 0 ;
   this.O139SecRoleId = 0 ;
   this.Z148SecRoleName = "" ;
   this.O148SecRoleName = "" ;
   this.Z147SecRoleDescription = "" ;
   this.O147SecRoleDescription = "" ;
   this.A141SecUserId = 0 ;
   this.Z141SecUserId = 0 ;
   this.O141SecUserId = 0 ;
   this.AV53ManageFiltersData = [ ] ;
   this.AV24DynamicFiltersSelector1 = "" ;
   this.AV25DynamicFiltersOperator1 = 0 ;
   this.AV26SecRoleName1 = "" ;
   this.AV28DynamicFiltersSelector2 = "" ;
   this.AV29DynamicFiltersOperator2 = 0 ;
   this.AV30SecRoleName2 = "" ;
   this.AV32DynamicFiltersSelector3 = "" ;
   this.AV33DynamicFiltersOperator3 = 0 ;
   this.AV34SecRoleName3 = "" ;
   this.AV57GridCurrentPage = 0 ;
   this.AV45DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.A141SecUserId = 0 ;
   this.AV8SecUserId = 0 ;
   this.AV59Display = "" ;
   this.A139SecRoleId = 0 ;
   this.A148SecRoleName = "" ;
   this.A147SecRoleDescription = "" ;
   this.AV49ManageFiltersExecutionStep = 0 ;
   this.AV63Pgmname = "" ;
   this.AV22OrderedBy = 0 ;
   this.AV23OrderedDsc = false ;
   this.AV19GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",CollapsedRecords:"",GroupBy:"",FilterValues:[],DynamicFilters:[]} ;
   this.AV36DynamicFiltersIgnoreFirst = false ;
   this.AV35DynamicFiltersRemoving = false ;
   this.AV27DynamicFiltersEnabled2 = false ;
   this.AV31DynamicFiltersEnabled3 = false ;
   this.AV60IsAuthorized_Display = false ;
   this.AV18IsAuthorized_SecRoleName = false ;
   this.AV21GridStateDynamicFilter = {Selected:"",Value:"",Operator:0,ValueTo:""} ;
   this.Events = {"e12392_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e13392_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e14392_client": ["DDO_GRID.ONOPTIONCLICKED", true] ,"e15392_client": ["'REMOVEDYNAMICFILTERS1'", true] ,"e16392_client": ["'REMOVEDYNAMICFILTERS2'", true] ,"e17392_client": ["'REMOVEDYNAMICFILTERS3'", true] ,"e11392_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e18392_client": ["'ADDDYNAMICFILTERS1'", true] ,"e19392_client": ["VDYNAMICFILTERSSELECTOR1.CLICK", true] ,"e20392_client": ["'ADDDYNAMICFILTERS2'", true] ,"e21392_client": ["VDYNAMICFILTERSSELECTOR2.CLICK", true] ,"e22392_client": ["VDYNAMICFILTERSSELECTOR3.CLICK", true] ,"e26392_client": ["ENTER", true] ,"e27392_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8SecUserId',fld:'vSECUSERID',pic:'ZZZ9'},{av:'sPrefix'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV63Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV36DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'}],[{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV57GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV58GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV53ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'AV63Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8SecUserId',fld:'vSECUSERID',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Jsonclick")',ctrl:'ADDDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Jsonclick")',ctrl:'ADDDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS3","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS3',prop:'Jsonclick'},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.GridInternalName',ctrl:'DDO_GRID',prop:'GridInternalName'},{av:'gx.fn.getCtrlProperty("SECUSERID","Visible")',ctrl:'SECUSERID',prop:'Visible'},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV53ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV8SecUserId',fld:'vSECUSERID',pic:'ZZZ9'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV63Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV36DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV8SecUserId',fld:'vSECUSERID',pic:'ZZZ9'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV63Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV36DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_GRID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV8SecUserId',fld:'vSECUSERID',pic:'ZZZ9'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV63Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV36DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.DDO_GRIDContainer.ActiveEventKey',ctrl:'DDO_GRID',prop:'ActiveEventKey'},{av:'this.DDO_GRIDContainer.SelectedValue_get',ctrl:'DDO_GRID',prop:'SelectedValue_get'}],[{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true}],[{av:'AV59Display',fld:'vDISPLAY',pic:''},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:'vDISPLAY',prop:'Link'},{av:'gx.fn.getCtrlProperty("SECROLENAME","Link")',ctrl:'SECROLENAME',prop:'Link'}]];
   this.EvtParms["'ADDDYNAMICFILTERS1'"] = [[],[{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV8SecUserId',fld:'vSECUSERID',pic:'ZZZ9'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV63Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV36DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV36DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV57GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV58GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV53ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR1.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'}]];
   this.EvtParms["'ADDDYNAMICFILTERS2'"] = [[],[{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV8SecUserId',fld:'vSECUSERID',pic:'ZZZ9'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV63Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV36DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV57GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV58GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV53ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR2.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS3'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV8SecUserId',fld:'vSECUSERID',pic:'ZZZ9'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV63Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV36DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'sPrefix'}],[{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV57GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV58GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV53ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR3.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV8SecUserId',fld:'vSECUSERID',pic:'ZZZ9'},{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV63Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV36DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV35DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'AV18IsAuthorized_SecRoleName',fld:'vISAUTHORIZED_SECROLENAME',pic:'',hsh:true},{av:'A141SecUserId',fld:'SECUSERID',pic:'ZZZ9'},{av:'sPrefix'},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'}],[{av:'AV49ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV19GridState',fld:'vGRIDSTATE',pic:''},{av:'AV22OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV23OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV24DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV25DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV26SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV27DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV28DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV29DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV30SecRoleName2',fld:'vSECROLENAME2',pic:''},{av:'AV31DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV32DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV33DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV34SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{av:'AV57GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV58GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV60IsAuthorized_Display',fld:'vISAUTHORIZED_DISPLAY',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:'vDISPLAY',prop:'Visible'},{av:'AV53ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VALID_SECROLEID"] = [[{av:'A148SecRoleName',fld:'SECROLENAME',pic:''},{av:'A147SecRoleDescription',fld:'SECROLEDESCRIPTION',pic:''},{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9'}],[{av:'A148SecRoleName',fld:'SECROLENAME',pic:''},{av:'A147SecRoleDescription',fld:'SECROLEDESCRIPTION',pic:''}]];
   this.setVCMap("AV49ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV63Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV22OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV23OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV19GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV36DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV35DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV27DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV31DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV60IsAuthorized_Display", "vISAUTHORIZED_DISPLAY", 0, "boolean", 4, 0);
   this.setVCMap("AV18IsAuthorized_SecRoleName", "vISAUTHORIZED_SECROLENAME", 0, "boolean", 4, 0);
   this.setVCMap("AV8SecUserId", "vSECUSERID", 0, "int", 4, 0);
   this.setVCMap("AV8SecUserId", "vSECUSERID", 0, "int", 4, 0);
   this.setVCMap("AV49ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV63Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV22OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV23OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV19GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV36DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV35DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV27DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV31DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV60IsAuthorized_Display", "vISAUTHORIZED_DISPLAY", 0, "boolean", 4, 0);
   this.setVCMap("AV18IsAuthorized_SecRoleName", "vISAUTHORIZED_SECROLENAME", 0, "boolean", 4, 0);
   this.setVCMap("AV8SecUserId", "vSECUSERID", 0, "int", 4, 0);
   this.setVCMap("AV49ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV63Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV22OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV23OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV19GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV36DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV35DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV27DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV31DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV60IsAuthorized_Display", "vISAUTHORIZED_DISPLAY", 0, "boolean", 4, 0);
   this.setVCMap("AV18IsAuthorized_SecRoleName", "vISAUTHORIZED_SECROLENAME", 0, "boolean", 4, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridContainer.addRefreshingVar({rfrVar:"AV8SecUserId"});
   GridContainer.addRefreshingVar({rfrVar:"AV49ManageFiltersExecutionStep"});
   GridContainer.addRefreshingVar({rfrVar:"AV63Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV22OrderedBy"});
   GridContainer.addRefreshingVar({rfrVar:"AV23OrderedDsc"});
   GridContainer.addRefreshingVar({rfrVar:"AV19GridState"});
   GridContainer.addRefreshingVar({rfrVar:"AV36DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingVar({rfrVar:"AV35DynamicFiltersRemoving"});
   GridContainer.addRefreshingVar({rfrVar:"AV27DynamicFiltersEnabled2"});
   GridContainer.addRefreshingVar({rfrVar:"AV31DynamicFiltersEnabled3"});
   GridContainer.addRefreshingVar({rfrVar:"AV60IsAuthorized_Display"});
   GridContainer.addRefreshingVar({rfrVar:"AV18IsAuthorized_SecRoleName"});
   GridContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridContainer.addRefreshingParm(this.GXValidFnc[31]);
   GridContainer.addRefreshingParm(this.GXValidFnc[39]);
   GridContainer.addRefreshingParm(this.GXValidFnc[42]);
   GridContainer.addRefreshingParm(this.GXValidFnc[55]);
   GridContainer.addRefreshingParm(this.GXValidFnc[63]);
   GridContainer.addRefreshingParm(this.GXValidFnc[66]);
   GridContainer.addRefreshingParm(this.GXValidFnc[79]);
   GridContainer.addRefreshingParm(this.GXValidFnc[87]);
   GridContainer.addRefreshingParm(this.GXValidFnc[90]);
   GridContainer.addRefreshingParm({rfrVar:"AV8SecUserId"});
   GridContainer.addRefreshingParm({rfrVar:"AV49ManageFiltersExecutionStep"});
   GridContainer.addRefreshingParm({rfrVar:"AV63Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV22OrderedBy"});
   GridContainer.addRefreshingParm({rfrVar:"AV23OrderedDsc"});
   GridContainer.addRefreshingParm({rfrVar:"AV19GridState"});
   GridContainer.addRefreshingParm({rfrVar:"AV36DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingParm({rfrVar:"AV35DynamicFiltersRemoving"});
   GridContainer.addRefreshingParm({rfrVar:"AV27DynamicFiltersEnabled2"});
   GridContainer.addRefreshingParm({rfrVar:"AV31DynamicFiltersEnabled3"});
   GridContainer.addRefreshingParm({rfrVar:"AV60IsAuthorized_Display"});
   GridContainer.addRefreshingParm({rfrVar:"AV18IsAuthorized_SecRoleName"});
   GridContainer.addRefreshingParm(this.GXValidFnc[114]);
   this.Initialize( );
});
