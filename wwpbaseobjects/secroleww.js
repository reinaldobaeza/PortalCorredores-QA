/*!   GeneXus C# 16_0_10-142546 on 4/20/2021 0:0:6.27
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.secroleww', false, function () {
   this.ServerClass =  "wwpbaseobjects.secroleww" ;
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
      this.AV64ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV50DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV55DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV71TFSecRoleName=gx.fn.getControlValue("vTFSECROLENAME") ;
      this.AV72TFSecRoleName_Sel=gx.fn.getControlValue("vTFSECROLENAME_SEL") ;
      this.AV75TFSecRoleDescription=gx.fn.getControlValue("vTFSECROLEDESCRIPTION") ;
      this.AV76TFSecRoleDescription_Sel=gx.fn.getControlValue("vTFSECROLEDESCRIPTION_SEL") ;
      this.AV93TFSecRoleAsociaCorredor_Sel=gx.fn.getIntegerValue("vTFSECROLEASOCIACORREDOR_SEL",'.') ;
      this.AV113Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV44OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV45OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV41GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV61DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV60DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV37IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV40IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV35IsAuthorized_UAAssociateFunctionalities=gx.fn.getControlValue("vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES") ;
      this.AV64ManageFiltersExecutionStep=gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.') ;
      this.AV50DynamicFiltersEnabled2=gx.fn.getControlValue("vDYNAMICFILTERSENABLED2") ;
      this.AV55DynamicFiltersEnabled3=gx.fn.getControlValue("vDYNAMICFILTERSENABLED3") ;
      this.AV71TFSecRoleName=gx.fn.getControlValue("vTFSECROLENAME") ;
      this.AV72TFSecRoleName_Sel=gx.fn.getControlValue("vTFSECROLENAME_SEL") ;
      this.AV75TFSecRoleDescription=gx.fn.getControlValue("vTFSECROLEDESCRIPTION") ;
      this.AV76TFSecRoleDescription_Sel=gx.fn.getControlValue("vTFSECROLEDESCRIPTION_SEL") ;
      this.AV93TFSecRoleAsociaCorredor_Sel=gx.fn.getIntegerValue("vTFSECROLEASOCIACORREDOR_SEL",'.') ;
      this.AV113Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV44OrderedBy=gx.fn.getIntegerValue("vORDEREDBY",'.') ;
      this.AV45OrderedDsc=gx.fn.getControlValue("vORDEREDDSC") ;
      this.AV41GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV61DynamicFiltersIgnoreFirst=gx.fn.getControlValue("vDYNAMICFILTERSIGNOREFIRST") ;
      this.AV60DynamicFiltersRemoving=gx.fn.getControlValue("vDYNAMICFILTERSREMOVING") ;
      this.AV37IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE") ;
      this.AV40IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE") ;
      this.AV35IsAuthorized_UAAssociateFunctionalities=gx.fn.getControlValue("vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES") ;
   };
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vSECROLENAME1","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", false );
      if ( this.AV46DynamicFiltersSelector1 == "SECROLENAME" )
      {
         gx.fn.setCtrlProperty("vSECROLENAME1","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR1","Visible", true );
      }
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vSECROLENAME2","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", false );
      if ( this.AV51DynamicFiltersSelector2 == "SECROLENAME" )
      {
         gx.fn.setCtrlProperty("vSECROLENAME2","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR2","Visible", true );
      }
   };
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vSECROLENAME3","Visible", false );
      gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", false );
      if ( this.AV56DynamicFiltersSelector3 == "SECROLENAME" )
      {
         gx.fn.setCtrlProperty("vSECROLENAME3","Visible", true );
         gx.fn.setCtrlProperty("vDYNAMICFILTERSOPERATOR3","Visible", true );
      }
   };
   this.s172_client=function()
   {
      this.DDO_GRIDContainer.SortedStatus =  gx.text.trim( gx.num.str( this.AV44OrderedBy, 4, 0))+":"+(this.AV45OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.s202_client=function()
   {
      if ( ! this.AV61DynamicFiltersIgnoreFirst )
      {
         this.AV43GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV43GridStateDynamicFilter.Selected =  this.AV46DynamicFiltersSelector1  ;
         if ( ( this.AV46DynamicFiltersSelector1 == "SECROLENAME" ) && ! ((''==this.AV48SecRoleName1)) )
         {
            this.AV43GridStateDynamicFilter.Value =  this.AV48SecRoleName1  ;
            this.AV43GridStateDynamicFilter.Operator = gx.num.trunc( this.AV47DynamicFiltersOperator1 ,0) ;
         }
         if ( this.AV60DynamicFiltersRemoving || ! ((''==this.AV43GridStateDynamicFilter.Value)) )
         {
            this.AV41GridState.DynamicFilters.push(this.AV43GridStateDynamicFilter) ;
         }
      }
      if ( this.AV50DynamicFiltersEnabled2 )
      {
         this.AV43GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV43GridStateDynamicFilter.Selected =  this.AV51DynamicFiltersSelector2  ;
         if ( ( this.AV51DynamicFiltersSelector2 == "SECROLENAME" ) && ! ((''==this.AV53SecRoleName2)) )
         {
            this.AV43GridStateDynamicFilter.Value =  this.AV53SecRoleName2  ;
            this.AV43GridStateDynamicFilter.Operator = gx.num.trunc( this.AV52DynamicFiltersOperator2 ,0) ;
         }
         if ( this.AV60DynamicFiltersRemoving || ! ((''==this.AV43GridStateDynamicFilter.Value)) )
         {
            this.AV41GridState.DynamicFilters.push(this.AV43GridStateDynamicFilter) ;
         }
      }
      if ( this.AV55DynamicFiltersEnabled3 )
      {
         this.AV43GridStateDynamicFilter =  {Selected:"",Value:"",Operator:0,ValueTo:""}  ;
         this.AV43GridStateDynamicFilter.Selected =  this.AV56DynamicFiltersSelector3  ;
         if ( ( this.AV56DynamicFiltersSelector3 == "SECROLENAME" ) && ! ((''==this.AV58SecRoleName3)) )
         {
            this.AV43GridStateDynamicFilter.Value =  this.AV58SecRoleName3  ;
            this.AV43GridStateDynamicFilter.Operator = gx.num.trunc( this.AV57DynamicFiltersOperator3 ,0) ;
         }
         if ( this.AV60DynamicFiltersRemoving || ! ((''==this.AV43GridStateDynamicFilter.Value)) )
         {
            this.AV41GridState.DynamicFilters.push(this.AV43GridStateDynamicFilter) ;
         }
      }
   };
   this.s212_client=function()
   {
      this.AV50DynamicFiltersEnabled2 =  false  ;
      this.AV51DynamicFiltersSelector2 =  "SECROLENAME"  ;
      this.AV52DynamicFiltersOperator2 = gx.num.trunc( 0 ,0) ;
      this.AV53SecRoleName2 =  ''  ;
      this.s132_client();
      this.AV55DynamicFiltersEnabled3 =  false  ;
      this.AV56DynamicFiltersSelector3 =  "SECROLENAME"  ;
      this.AV57DynamicFiltersOperator3 = gx.num.trunc( 0 ,0) ;
      this.AV58SecRoleName3 =  ''  ;
      this.s142_client();
   };
   this.e122r2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e132r2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e142r2_client=function()
   {
      return this.executeServerEvent("DDO_GRID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e152r2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e162r2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e172r2_client=function()
   {
      return this.executeServerEvent("'REMOVEDYNAMICFILTERS3'", true, null, false, false);
   };
   this.e112r2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e182r2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e192r2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e202r2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e212r2_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS1'", true, null, false, false);
   };
   this.e222r2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR1.CLICK", true, null, false, true);
   };
   this.e232r2_client=function()
   {
      return this.executeServerEvent("'ADDDYNAMICFILTERS2'", true, null, false, false);
   };
   this.e242r2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR2.CLICK", true, null, false, true);
   };
   this.e252r2_client=function()
   {
      return this.executeServerEvent("VDYNAMICFILTERSSELECTOR3.CLICK", true, null, false, true);
   };
   this.e292r2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e302r2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28,31,34,36,37,39,41,44,45,47,48,50,53,55,58,60,61,63,65,68,69,71,72,74,77,79,82,84,85,87,89,92,93,95,96,98,101,102,103,105,106,107,108,109,111,112,113,114,115,116,117,118,119,120,122,123,124,125];
   this.GXLastCtrlId =125;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",110,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.secroleww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Display",111,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Update",112,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",113,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addBitmap("&Uaassociatefunctionalities","vUAASSOCIATEFUNCTIONALITIES",114,0,"px",17,"px",null,"","","ActionBaseColorAttribute","WWActionColumn");
   GridContainer.addSingleLineEdit(139,115,"SECROLEID","Id","","SecRoleId","int",0,"px",4,4,"right",null,[],139,"SecRoleId",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(148,116,"SECROLENAME","Name","","SecRoleName","svchar",0,"px",40,40,"left",null,[],148,"SecRoleName",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(147,117,"SECROLEDESCRIPTION","Description","","SecRoleDescription","svchar",0,"px",120,80,"left",null,[],147,"SecRoleDescription",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addCheckBox(162,118,"SECROLEASOCIACORREDOR","Asocia Corredor","","SecRoleAsociaCorredor","boolean","true","false",null,true,false,0,"px","WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 121, 37, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV89GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV89GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV89GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV90GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV90GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV90GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e122r2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e132r2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_GRIDContainer = gx.uc.getNew(this, 126, 37, "DDOGridTitleSettingsM", "DDO_GRIDContainer", "Ddo_grid", "DDO_GRID");
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
   DDO_GRIDContainer.setProp("ColumnIds", "Columnids", "5:SecRoleName|6:SecRoleDescription|7:SecRoleAsociaCorredor", "str");
   DDO_GRIDContainer.setProp("ColumnsSortValues", "Columnssortvalues", "1|2|3", "str");
   DDO_GRIDContainer.setProp("IncludeSortASC", "Includesortasc", "T", "str");
   DDO_GRIDContainer.setProp("IncludeSortDSC", "Includesortdsc", "", "str");
   DDO_GRIDContainer.setProp("AllowGroup", "Allowgroup", "", "str");
   DDO_GRIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_GRIDContainer.setProp("IncludeFilter", "Includefilter", "T|T|", "str");
   DDO_GRIDContainer.setProp("FilterType", "Filtertype", "Character|Character|", "str");
   DDO_GRIDContainer.setProp("FilterIsRange", "Filterisrange", "", "str");
   DDO_GRIDContainer.setProp("IncludeDataList", "Includedatalist", "T", "str");
   DDO_GRIDContainer.setProp("DataListType", "Datalisttype", "Dynamic|Dynamic|FixedValues", "str");
   DDO_GRIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", "", "str");
   DDO_GRIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "||1:WWP_TSChecked,2:WWP_TSUnChecked", "str");
   DDO_GRIDContainer.setProp("DataListProc", "Datalistproc", "WWPBaseObjects.SecRoleWWGetFilterData", "str");
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
   DDO_GRIDContainer.addV2CFunction('AV78DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV78DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV78DDO_TitleSettingsIcons); });
   DDO_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDContainer.addEventHandler("OnOptionClicked", this.e142r2_client);
   this.setUserControl(DDO_GRIDContainer);
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 127, 37, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
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
   this.DDO_MANAGEFILTERSContainer = gx.uc.getNew(this, 26, 0, "BootstrapDropDownOptions", "DDO_MANAGEFILTERSContainer", "Ddo_managefilters", "DDO_MANAGEFILTERS");
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
   DDO_MANAGEFILTERSContainer.addV2CFunction('AV68ManageFiltersData', "vMANAGEFILTERSDATA", 'SetDropDownOptionsData');
   DDO_MANAGEFILTERSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV68ManageFiltersData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",UC.ParentObject.AV68ManageFiltersData); });
   DDO_MANAGEFILTERSContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   DDO_MANAGEFILTERSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e112r2_client);
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
   GXValidFnc[17]={ id: 17, fld:"BTNINSERT",grid:0,evt:"e182r2_client"};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"BTNEXPORT",grid:0,evt:"e192r2_client"};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"BTNEXPORTREPORT",grid:0,evt:"e202r2_client"};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"TABLERIGHTHEADER",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[31]={ id: 31, fld:"TABLEDYNAMICFILTERS",grid:0};
   GXValidFnc[34]={ id: 34, fld:"DYNAMICFILTERSPREFIX1", format:0,grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR1",gxz:"ZV46DynamicFiltersSelector1",gxold:"OV46DynamicFiltersSelector1",gxvar:"AV46DynamicFiltersSelector1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV46DynamicFiltersSelector1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV46DynamicFiltersSelector1=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR1",gx.O.AV46DynamicFiltersSelector1)},c2v:function(){if(this.val()!==undefined)gx.O.AV46DynamicFiltersSelector1=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR1")},nac:gx.falseFn,evt:"e222r2_client"};
   GXValidFnc[39]={ id: 39, fld:"DYNAMICFILTERSMIDDLE1", format:0,grid:0};
   GXValidFnc[41]={ id: 41, fld:"TABLEMERGEDDYNAMICFILTERS1",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR1",gxz:"ZV47DynamicFiltersOperator1",gxold:"OV47DynamicFiltersOperator1",gxvar:"AV47DynamicFiltersOperator1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV47DynamicFiltersOperator1=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47DynamicFiltersOperator1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR1",gx.O.AV47DynamicFiltersOperator1)},c2v:function(){if(this.val()!==undefined)gx.O.AV47DynamicFiltersOperator1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR1",'.')},nac:gx.falseFn};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECROLENAME1",gxz:"ZV48SecRoleName1",gxold:"OV48SecRoleName1",gxvar:"AV48SecRoleName1",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48SecRoleName1=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48SecRoleName1=Value},v2c:function(){gx.fn.setControlValue("vSECROLENAME1",gx.O.AV48SecRoleName1,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48SecRoleName1=this.val()},val:function(){return gx.fn.getControlValue("vSECROLENAME1")},nac:gx.falseFn};
   GXValidFnc[50]={ id: 50, fld:"UNNAMEDTABLEDYNAMICFILTERS_1",grid:0};
   GXValidFnc[53]={ id: 53, fld:"ADDDYNAMICFILTERS1",grid:0,evt:"e212r2_client"};
   GXValidFnc[55]={ id: 55, fld:"REMOVEDYNAMICFILTERS1",grid:0,evt:"e152r2_client"};
   GXValidFnc[58]={ id: 58, fld:"DYNAMICFILTERSPREFIX2", format:0,grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR2",gxz:"ZV51DynamicFiltersSelector2",gxold:"OV51DynamicFiltersSelector2",gxvar:"AV51DynamicFiltersSelector2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV51DynamicFiltersSelector2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51DynamicFiltersSelector2=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR2",gx.O.AV51DynamicFiltersSelector2)},c2v:function(){if(this.val()!==undefined)gx.O.AV51DynamicFiltersSelector2=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR2")},nac:gx.falseFn,evt:"e242r2_client"};
   GXValidFnc[63]={ id: 63, fld:"DYNAMICFILTERSMIDDLE2", format:0,grid:0};
   GXValidFnc[65]={ id: 65, fld:"TABLEMERGEDDYNAMICFILTERS2",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR2",gxz:"ZV52DynamicFiltersOperator2",gxold:"OV52DynamicFiltersOperator2",gxvar:"AV52DynamicFiltersOperator2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV52DynamicFiltersOperator2=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV52DynamicFiltersOperator2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR2",gx.O.AV52DynamicFiltersOperator2)},c2v:function(){if(this.val()!==undefined)gx.O.AV52DynamicFiltersOperator2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR2",'.')},nac:gx.falseFn};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECROLENAME2",gxz:"ZV53SecRoleName2",gxold:"OV53SecRoleName2",gxvar:"AV53SecRoleName2",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV53SecRoleName2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV53SecRoleName2=Value},v2c:function(){gx.fn.setControlValue("vSECROLENAME2",gx.O.AV53SecRoleName2,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV53SecRoleName2=this.val()},val:function(){return gx.fn.getControlValue("vSECROLENAME2")},nac:gx.falseFn};
   GXValidFnc[74]={ id: 74, fld:"UNNAMEDTABLEDYNAMICFILTERS_2",grid:0};
   GXValidFnc[77]={ id: 77, fld:"ADDDYNAMICFILTERS2",grid:0,evt:"e232r2_client"};
   GXValidFnc[79]={ id: 79, fld:"REMOVEDYNAMICFILTERS2",grid:0,evt:"e162r2_client"};
   GXValidFnc[82]={ id: 82, fld:"DYNAMICFILTERSPREFIX3", format:0,grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSSELECTOR3",gxz:"ZV56DynamicFiltersSelector3",gxold:"OV56DynamicFiltersSelector3",gxvar:"AV56DynamicFiltersSelector3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV56DynamicFiltersSelector3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56DynamicFiltersSelector3=Value},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSSELECTOR3",gx.O.AV56DynamicFiltersSelector3)},c2v:function(){if(this.val()!==undefined)gx.O.AV56DynamicFiltersSelector3=this.val()},val:function(){return gx.fn.getControlValue("vDYNAMICFILTERSSELECTOR3")},nac:gx.falseFn,evt:"e252r2_client"};
   GXValidFnc[87]={ id: 87, fld:"DYNAMICFILTERSMIDDLE3", format:0,grid:0};
   GXValidFnc[89]={ id: 89, fld:"TABLEMERGEDDYNAMICFILTERS3",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDYNAMICFILTERSOPERATOR3",gxz:"ZV57DynamicFiltersOperator3",gxold:"OV57DynamicFiltersOperator3",gxvar:"AV57DynamicFiltersOperator3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV57DynamicFiltersOperator3=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV57DynamicFiltersOperator3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDYNAMICFILTERSOPERATOR3",gx.O.AV57DynamicFiltersOperator3)},c2v:function(){if(this.val()!==undefined)gx.O.AV57DynamicFiltersOperator3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDYNAMICFILTERSOPERATOR3",'.')},nac:gx.falseFn};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id:96 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSECROLENAME3",gxz:"ZV58SecRoleName3",gxold:"OV58SecRoleName3",gxvar:"AV58SecRoleName3",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58SecRoleName3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV58SecRoleName3=Value},v2c:function(){gx.fn.setControlValue("vSECROLENAME3",gx.O.AV58SecRoleName3,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV58SecRoleName3=this.val()},val:function(){return gx.fn.getControlValue("vSECROLENAME3")},nac:gx.falseFn};
   GXValidFnc[98]={ id: 98, fld:"UNNAMEDTABLEDYNAMICFILTERS_3",grid:0};
   GXValidFnc[101]={ id: 101, fld:"REMOVEDYNAMICFILTERS3",grid:0,evt:"e172r2_client"};
   GXValidFnc[102]={ id: 102, fld:"",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"",grid:0};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[111]={ id:111 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:110,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV91Display",gxold:"OV91Display",gxvar:"AV91Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV91Display=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV91Display=Value},v2c:function(row){gx.fn.setGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(110),gx.O.AV91Display,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV91Display=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDISPLAY",row || gx.fn.currentGridRowImpl(110))},nac:gx.falseFn};
   GXValidFnc[112]={ id:112 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:110,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV13Update",gxold:"OV13Update",gxvar:"AV13Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV13Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(110),gx.O.AV13Update,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV13Update=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(110))},nac:gx.falseFn};
   GXValidFnc[113]={ id:113 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:110,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV14Delete",gxold:"OV14Delete",gxvar:"AV14Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV14Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV14Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(110),gx.O.AV14Delete,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV14Delete=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(110))},nac:gx.falseFn};
   GXValidFnc[114]={ id:114 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:110,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUAASSOCIATEFUNCTIONALITIES",gxz:"ZV34UAAssociateFunctionalities",gxold:"OV34UAAssociateFunctionalities",gxvar:"AV34UAAssociateFunctionalities",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV34UAAssociateFunctionalities=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34UAAssociateFunctionalities=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUAASSOCIATEFUNCTIONALITIES",row || gx.fn.currentGridRowImpl(110),gx.O.AV34UAAssociateFunctionalities,gx.O.AV112Uaassociatefunctionalities_GXI)},c2v:function(row){gx.O.AV112Uaassociatefunctionalities_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV34UAAssociateFunctionalities=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUAASSOCIATEFUNCTIONALITIES",row || gx.fn.currentGridRowImpl(110))},val_GXI:function(row){return gx.fn.getGridControlValue("vUAASSOCIATEFUNCTIONALITIES_GXI",row || gx.fn.currentGridRowImpl(110))}, gxvar_GXI:'AV112Uaassociatefunctionalities_GXI',nac:gx.falseFn};
   GXValidFnc[115]={ id:115 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:110,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEID",gxz:"Z139SecRoleId",gxold:"O139SecRoleId",gxvar:"A139SecRoleId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A139SecRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z139SecRoleId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SECROLEID",row || gx.fn.currentGridRowImpl(110),gx.O.A139SecRoleId,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A139SecRoleId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("SECROLEID",row || gx.fn.currentGridRowImpl(110),'.')},nac:gx.falseFn};
   GXValidFnc[116]={ id:116 ,lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:110,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLENAME",gxz:"Z148SecRoleName",gxold:"O148SecRoleName",gxvar:"A148SecRoleName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A148SecRoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z148SecRoleName=Value},v2c:function(row){gx.fn.setGridControlValue("SECROLENAME",row || gx.fn.currentGridRowImpl(110),gx.O.A148SecRoleName,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A148SecRoleName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECROLENAME",row || gx.fn.currentGridRowImpl(110))},nac:gx.falseFn};
   GXValidFnc[117]={ id:117 ,lvl:2,type:"svchar",len:120,dec:0,sign:false,ro:1,isacc:0,grid:110,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEDESCRIPTION",gxz:"Z147SecRoleDescription",gxold:"O147SecRoleDescription",gxvar:"A147SecRoleDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A147SecRoleDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z147SecRoleDescription=Value},v2c:function(row){gx.fn.setGridControlValue("SECROLEDESCRIPTION",row || gx.fn.currentGridRowImpl(110),gx.O.A147SecRoleDescription,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A147SecRoleDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("SECROLEDESCRIPTION",row || gx.fn.currentGridRowImpl(110))},nac:gx.falseFn};
   GXValidFnc[118]={ id:118 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:110,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SECROLEASOCIACORREDOR",gxz:"Z162SecRoleAsociaCorredor",gxold:"O162SecRoleAsociaCorredor",gxvar:"A162SecRoleAsociaCorredor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A162SecRoleAsociaCorredor=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z162SecRoleAsociaCorredor=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("SECROLEASOCIACORREDOR",row || gx.fn.currentGridRowImpl(110),gx.O.A162SecRoleAsociaCorredor,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.A162SecRoleAsociaCorredor=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("SECROLEASOCIACORREDOR",row || gx.fn.currentGridRowImpl(110))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[122]={ id: 122, fld:"",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id: 124, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[125]={ id: 125, fld:"JSDYNAMICFILTERS", format:1,grid:0};
   this.AV46DynamicFiltersSelector1 = "" ;
   this.ZV46DynamicFiltersSelector1 = "" ;
   this.OV46DynamicFiltersSelector1 = "" ;
   this.AV47DynamicFiltersOperator1 = 0 ;
   this.ZV47DynamicFiltersOperator1 = 0 ;
   this.OV47DynamicFiltersOperator1 = 0 ;
   this.AV48SecRoleName1 = "" ;
   this.ZV48SecRoleName1 = "" ;
   this.OV48SecRoleName1 = "" ;
   this.AV51DynamicFiltersSelector2 = "" ;
   this.ZV51DynamicFiltersSelector2 = "" ;
   this.OV51DynamicFiltersSelector2 = "" ;
   this.AV52DynamicFiltersOperator2 = 0 ;
   this.ZV52DynamicFiltersOperator2 = 0 ;
   this.OV52DynamicFiltersOperator2 = 0 ;
   this.AV53SecRoleName2 = "" ;
   this.ZV53SecRoleName2 = "" ;
   this.OV53SecRoleName2 = "" ;
   this.AV56DynamicFiltersSelector3 = "" ;
   this.ZV56DynamicFiltersSelector3 = "" ;
   this.OV56DynamicFiltersSelector3 = "" ;
   this.AV57DynamicFiltersOperator3 = 0 ;
   this.ZV57DynamicFiltersOperator3 = 0 ;
   this.OV57DynamicFiltersOperator3 = 0 ;
   this.AV58SecRoleName3 = "" ;
   this.ZV58SecRoleName3 = "" ;
   this.OV58SecRoleName3 = "" ;
   this.ZV91Display = "" ;
   this.OV91Display = "" ;
   this.ZV13Update = "" ;
   this.OV13Update = "" ;
   this.ZV14Delete = "" ;
   this.OV14Delete = "" ;
   this.ZV34UAAssociateFunctionalities = "" ;
   this.OV34UAAssociateFunctionalities = "" ;
   this.Z139SecRoleId = 0 ;
   this.O139SecRoleId = 0 ;
   this.Z148SecRoleName = "" ;
   this.O148SecRoleName = "" ;
   this.Z147SecRoleDescription = "" ;
   this.O147SecRoleDescription = "" ;
   this.Z162SecRoleAsociaCorredor = false ;
   this.O162SecRoleAsociaCorredor = false ;
   this.AV68ManageFiltersData = [ ] ;
   this.AV46DynamicFiltersSelector1 = "" ;
   this.AV47DynamicFiltersOperator1 = 0 ;
   this.AV48SecRoleName1 = "" ;
   this.AV51DynamicFiltersSelector2 = "" ;
   this.AV52DynamicFiltersOperator2 = 0 ;
   this.AV53SecRoleName2 = "" ;
   this.AV56DynamicFiltersSelector3 = "" ;
   this.AV57DynamicFiltersOperator3 = 0 ;
   this.AV58SecRoleName3 = "" ;
   this.AV89GridCurrentPage = 0 ;
   this.AV78DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV91Display = "" ;
   this.AV13Update = "" ;
   this.AV14Delete = "" ;
   this.AV34UAAssociateFunctionalities = "" ;
   this.A139SecRoleId = 0 ;
   this.A148SecRoleName = "" ;
   this.A147SecRoleDescription = "" ;
   this.A162SecRoleAsociaCorredor = false ;
   this.AV64ManageFiltersExecutionStep = 0 ;
   this.AV50DynamicFiltersEnabled2 = false ;
   this.AV55DynamicFiltersEnabled3 = false ;
   this.AV71TFSecRoleName = "" ;
   this.AV72TFSecRoleName_Sel = "" ;
   this.AV75TFSecRoleDescription = "" ;
   this.AV76TFSecRoleDescription_Sel = "" ;
   this.AV93TFSecRoleAsociaCorredor_Sel = 0 ;
   this.AV113Pgmname = "" ;
   this.AV44OrderedBy = 0 ;
   this.AV45OrderedDsc = false ;
   this.AV41GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",CollapsedRecords:"",GroupBy:"",FilterValues:[],DynamicFilters:[]} ;
   this.AV61DynamicFiltersIgnoreFirst = false ;
   this.AV60DynamicFiltersRemoving = false ;
   this.AV37IsAuthorized_Update = false ;
   this.AV40IsAuthorized_Delete = false ;
   this.AV35IsAuthorized_UAAssociateFunctionalities = false ;
   this.AV43GridStateDynamicFilter = {Selected:"",Value:"",Operator:0,ValueTo:""} ;
   this.Events = {"e122r2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e132r2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e142r2_client": ["DDO_GRID.ONOPTIONCLICKED", true] ,"e152r2_client": ["'REMOVEDYNAMICFILTERS1'", true] ,"e162r2_client": ["'REMOVEDYNAMICFILTERS2'", true] ,"e172r2_client": ["'REMOVEDYNAMICFILTERS3'", true] ,"e112r2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e182r2_client": ["'DOINSERT'", true] ,"e192r2_client": ["'DOEXPORT'", true] ,"e202r2_client": ["'DOEXPORTREPORT'", true] ,"e212r2_client": ["'ADDDYNAMICFILTERS1'", true] ,"e222r2_client": ["VDYNAMICFILTERSSELECTOR1.CLICK", true] ,"e232r2_client": ["'ADDDYNAMICFILTERS2'", true] ,"e242r2_client": ["VDYNAMICFILTERSSELECTOR2.CLICK", true] ,"e252r2_client": ["VDYNAMICFILTERSSELECTOR3.CLICK", true] ,"e292r2_client": ["ENTER", true] ,"e302r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true}],[{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV89GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV90GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Visible")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV68ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Jsonclick")',ctrl:'ADDDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Jsonclick")',ctrl:'ADDDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS3","Jsonclick")',ctrl:'REMOVEDYNAMICFILTERS3',prop:'Jsonclick'},{av:'this.DDO_GRIDContainer.GridInternalName',ctrl:'DDO_GRID',prop:'GridInternalName'},{ctrl:'FORM',prop:'Caption'},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV78DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'gx.fn.getCtrlProperty("TEXTBLOCKTITLE","Caption")',ctrl:'TEXTBLOCKTITLE',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV68ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_GRID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.ActiveEventKey',ctrl:'DDO_GRID',prop:'ActiveEventKey'},{av:'this.DDO_GRIDContainer.SelectedValue_get',ctrl:'DDO_GRID',prop:'SelectedValue_get'},{av:'this.DDO_GRIDContainer.SelectedColumn',ctrl:'DDO_GRID',prop:'SelectedColumn'},{av:'this.DDO_GRIDContainer.FilteredText_get',ctrl:'DDO_GRID',prop:'FilteredText_get'}],[{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9',hsh:true},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true}],[{av:'AV91Display',fld:'vDISPLAY',pic:''},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:'vDISPLAY',prop:'Link'},{av:'AV13Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV14Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'AV34UAAssociateFunctionalities',fld:'vUAASSOCIATEFUNCTIONALITIES',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Tooltiptext")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Link")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Link'},{av:'gx.fn.getCtrlProperty("SECROLENAME","Link")',ctrl:'SECROLENAME',prop:'Link'}]];
   this.EvtParms["'ADDDYNAMICFILTERS1'"] = [[],[{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS1'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true}],[{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV89GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV90GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Visible")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV68ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR1.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR1'}]];
   this.EvtParms["'ADDDYNAMICFILTERS2'"] = [[],[{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS2'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true}],[{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV89GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV90GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Visible")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV68ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR2.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR2'}]];
   this.EvtParms["'REMOVEDYNAMICFILTERS3'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true}],[{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV89GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV90GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Visible")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV68ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["VDYNAMICFILTERSSELECTOR3.CLICK"] = [[{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{ctrl:'vDYNAMICFILTERSOPERATOR3'}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'}],[{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'},{av:'AV89GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV90GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:'vUPDATE',prop:'Visible'},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:'vDELETE',prop:'Visible'},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Visible")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Visible'},{ctrl:'BTNINSERT',prop:'Visible'},{av:'AV68ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A139SecRoleId',fld:'SECROLEID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV41GridState',fld:'vGRIDSTATE',pic:''},{av:'AV44OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV45OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'vDYNAMICFILTERSSELECTOR1'},{av:'AV46DynamicFiltersSelector1',fld:'vDYNAMICFILTERSSELECTOR1',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR1'},{av:'AV47DynamicFiltersOperator1',fld:'vDYNAMICFILTERSOPERATOR1',pic:'ZZZ9'},{av:'AV48SecRoleName1',fld:'vSECROLENAME1',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR2'},{av:'AV51DynamicFiltersSelector2',fld:'vDYNAMICFILTERSSELECTOR2',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR2'},{av:'AV52DynamicFiltersOperator2',fld:'vDYNAMICFILTERSOPERATOR2',pic:'ZZZ9'},{av:'AV53SecRoleName2',fld:'vSECROLENAME2',pic:''},{ctrl:'vDYNAMICFILTERSSELECTOR3'},{av:'AV56DynamicFiltersSelector3',fld:'vDYNAMICFILTERSSELECTOR3',pic:''},{ctrl:'vDYNAMICFILTERSOPERATOR3'},{av:'AV57DynamicFiltersOperator3',fld:'vDYNAMICFILTERSOPERATOR3',pic:'ZZZ9'},{av:'AV58SecRoleName3',fld:'vSECROLENAME3',pic:''},{av:'AV64ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV50DynamicFiltersEnabled2',fld:'vDYNAMICFILTERSENABLED2',pic:''},{av:'AV55DynamicFiltersEnabled3',fld:'vDYNAMICFILTERSENABLED3',pic:''},{av:'AV71TFSecRoleName',fld:'vTFSECROLENAME',pic:''},{av:'AV72TFSecRoleName_Sel',fld:'vTFSECROLENAME_SEL',pic:''},{av:'AV75TFSecRoleDescription',fld:'vTFSECROLEDESCRIPTION',pic:''},{av:'AV76TFSecRoleDescription_Sel',fld:'vTFSECROLEDESCRIPTION_SEL',pic:''},{av:'AV93TFSecRoleAsociaCorredor_Sel',fld:'vTFSECROLEASOCIACORREDOR_SEL',pic:'9'},{av:'AV113Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV61DynamicFiltersIgnoreFirst',fld:'vDYNAMICFILTERSIGNOREFIRST',pic:''},{av:'AV60DynamicFiltersRemoving',fld:'vDYNAMICFILTERSREMOVING',pic:''},{av:'gx.fn.getCtrlProperty("vUAASSOCIATEFUNCTIONALITIES","Title")',ctrl:'vUAASSOCIATEFUNCTIONALITIES',prop:'Title'},{av:'AV37IsAuthorized_Update',fld:'vISAUTHORIZED_UPDATE',pic:'',hsh:true},{av:'AV40IsAuthorized_Delete',fld:'vISAUTHORIZED_DELETE',pic:'',hsh:true},{av:'AV35IsAuthorized_UAAssociateFunctionalities',fld:'vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES',pic:'',hsh:true},{av:'this.DDO_GRIDContainer.SortedStatus',ctrl:'DDO_GRID',prop:'SortedStatus'},{av:'this.DDO_GRIDContainer.SelectedValue_set',ctrl:'DDO_GRID',prop:'SelectedValue_set'},{av:'this.DDO_GRIDContainer.FilteredText_set',ctrl:'DDO_GRID',prop:'FilteredText_set'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS1","Visible")',ctrl:'ADDDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS1","Visible")',ctrl:'REMOVEDYNAMICFILTERS1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ADDDYNAMICFILTERS2","Visible")',ctrl:'ADDDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REMOVEDYNAMICFILTERS2","Visible")',ctrl:'REMOVEDYNAMICFILTERS2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("JSDYNAMICFILTERS","Caption")',ctrl:'JSDYNAMICFILTERS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSECROLENAME1","Visible")',ctrl:'vSECROLENAME1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME2","Visible")',ctrl:'vSECROLENAME2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSECROLENAME3","Visible")',ctrl:'vSECROLENAME3',prop:'Visible'}]];
   this.setVCMap("AV64ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV50DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV55DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV71TFSecRoleName", "vTFSECROLENAME", 0, "svchar", 40, 0);
   this.setVCMap("AV72TFSecRoleName_Sel", "vTFSECROLENAME_SEL", 0, "svchar", 40, 0);
   this.setVCMap("AV75TFSecRoleDescription", "vTFSECROLEDESCRIPTION", 0, "svchar", 120, 0);
   this.setVCMap("AV76TFSecRoleDescription_Sel", "vTFSECROLEDESCRIPTION_SEL", 0, "svchar", 120, 0);
   this.setVCMap("AV93TFSecRoleAsociaCorredor_Sel", "vTFSECROLEASOCIACORREDOR_SEL", 0, "int", 1, 0);
   this.setVCMap("AV113Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV44OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV45OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV41GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV61DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV60DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV37IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV40IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV35IsAuthorized_UAAssociateFunctionalities", "vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES", 0, "boolean", 4, 0);
   this.setVCMap("AV64ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV50DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV55DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV71TFSecRoleName", "vTFSECROLENAME", 0, "svchar", 40, 0);
   this.setVCMap("AV72TFSecRoleName_Sel", "vTFSECROLENAME_SEL", 0, "svchar", 40, 0);
   this.setVCMap("AV75TFSecRoleDescription", "vTFSECROLEDESCRIPTION", 0, "svchar", 120, 0);
   this.setVCMap("AV76TFSecRoleDescription_Sel", "vTFSECROLEDESCRIPTION_SEL", 0, "svchar", 120, 0);
   this.setVCMap("AV93TFSecRoleAsociaCorredor_Sel", "vTFSECROLEASOCIACORREDOR_SEL", 0, "int", 1, 0);
   this.setVCMap("AV113Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV44OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV45OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV41GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV61DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV60DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV37IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV40IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV35IsAuthorized_UAAssociateFunctionalities", "vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES", 0, "boolean", 4, 0);
   this.setVCMap("AV64ManageFiltersExecutionStep", "vMANAGEFILTERSEXECUTIONSTEP", 0, "int", 1, 0);
   this.setVCMap("AV50DynamicFiltersEnabled2", "vDYNAMICFILTERSENABLED2", 0, "boolean", 4, 0);
   this.setVCMap("AV55DynamicFiltersEnabled3", "vDYNAMICFILTERSENABLED3", 0, "boolean", 4, 0);
   this.setVCMap("AV71TFSecRoleName", "vTFSECROLENAME", 0, "svchar", 40, 0);
   this.setVCMap("AV72TFSecRoleName_Sel", "vTFSECROLENAME_SEL", 0, "svchar", 40, 0);
   this.setVCMap("AV75TFSecRoleDescription", "vTFSECROLEDESCRIPTION", 0, "svchar", 120, 0);
   this.setVCMap("AV76TFSecRoleDescription_Sel", "vTFSECROLEDESCRIPTION_SEL", 0, "svchar", 120, 0);
   this.setVCMap("AV93TFSecRoleAsociaCorredor_Sel", "vTFSECROLEASOCIACORREDOR_SEL", 0, "int", 1, 0);
   this.setVCMap("AV113Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV44OrderedBy", "vORDEREDBY", 0, "int", 4, 0);
   this.setVCMap("AV45OrderedDsc", "vORDEREDDSC", 0, "boolean", 4, 0);
   this.setVCMap("AV41GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV61DynamicFiltersIgnoreFirst", "vDYNAMICFILTERSIGNOREFIRST", 0, "boolean", 4, 0);
   this.setVCMap("AV60DynamicFiltersRemoving", "vDYNAMICFILTERSREMOVING", 0, "boolean", 4, 0);
   this.setVCMap("AV37IsAuthorized_Update", "vISAUTHORIZED_UPDATE", 0, "boolean", 4, 0);
   this.setVCMap("AV40IsAuthorized_Delete", "vISAUTHORIZED_DELETE", 0, "boolean", 4, 0);
   this.setVCMap("AV35IsAuthorized_UAAssociateFunctionalities", "vISAUTHORIZED_UAASSOCIATEFUNCTIONALITIES", 0, "boolean", 4, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar({rfrVar:"AV64ManageFiltersExecutionStep"});
   GridContainer.addRefreshingVar({rfrVar:"AV50DynamicFiltersEnabled2"});
   GridContainer.addRefreshingVar({rfrVar:"AV55DynamicFiltersEnabled3"});
   GridContainer.addRefreshingVar({rfrVar:"AV71TFSecRoleName"});
   GridContainer.addRefreshingVar({rfrVar:"AV72TFSecRoleName_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV75TFSecRoleDescription"});
   GridContainer.addRefreshingVar({rfrVar:"AV76TFSecRoleDescription_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV93TFSecRoleAsociaCorredor_Sel"});
   GridContainer.addRefreshingVar({rfrVar:"AV113Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV44OrderedBy"});
   GridContainer.addRefreshingVar({rfrVar:"AV45OrderedDsc"});
   GridContainer.addRefreshingVar({rfrVar:"AV41GridState"});
   GridContainer.addRefreshingVar({rfrVar:"AV61DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingVar({rfrVar:"AV60DynamicFiltersRemoving"});
   GridContainer.addRefreshingVar({rfrVar:"AV34UAAssociateFunctionalities", rfrProp:"Title", gxAttId:"Uaassociatefunctionalities"});
   GridContainer.addRefreshingVar({rfrVar:"AV37IsAuthorized_Update"});
   GridContainer.addRefreshingVar({rfrVar:"AV40IsAuthorized_Delete"});
   GridContainer.addRefreshingVar({rfrVar:"AV35IsAuthorized_UAAssociateFunctionalities"});
   GridContainer.addRefreshingParm(this.GXValidFnc[37]);
   GridContainer.addRefreshingParm(this.GXValidFnc[45]);
   GridContainer.addRefreshingParm(this.GXValidFnc[48]);
   GridContainer.addRefreshingParm(this.GXValidFnc[61]);
   GridContainer.addRefreshingParm(this.GXValidFnc[69]);
   GridContainer.addRefreshingParm(this.GXValidFnc[72]);
   GridContainer.addRefreshingParm(this.GXValidFnc[85]);
   GridContainer.addRefreshingParm(this.GXValidFnc[93]);
   GridContainer.addRefreshingParm(this.GXValidFnc[96]);
   GridContainer.addRefreshingParm({rfrVar:"AV64ManageFiltersExecutionStep"});
   GridContainer.addRefreshingParm({rfrVar:"AV50DynamicFiltersEnabled2"});
   GridContainer.addRefreshingParm({rfrVar:"AV55DynamicFiltersEnabled3"});
   GridContainer.addRefreshingParm({rfrVar:"AV71TFSecRoleName"});
   GridContainer.addRefreshingParm({rfrVar:"AV72TFSecRoleName_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV75TFSecRoleDescription"});
   GridContainer.addRefreshingParm({rfrVar:"AV76TFSecRoleDescription_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV93TFSecRoleAsociaCorredor_Sel"});
   GridContainer.addRefreshingParm({rfrVar:"AV113Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV44OrderedBy"});
   GridContainer.addRefreshingParm({rfrVar:"AV45OrderedDsc"});
   GridContainer.addRefreshingParm({rfrVar:"AV41GridState"});
   GridContainer.addRefreshingParm({rfrVar:"AV61DynamicFiltersIgnoreFirst"});
   GridContainer.addRefreshingParm({rfrVar:"AV60DynamicFiltersRemoving"});
   GridContainer.addRefreshingParm({rfrVar:"AV34UAAssociateFunctionalities", rfrProp:"Title", gxAttId:"Uaassociatefunctionalities"});
   GridContainer.addRefreshingParm({rfrVar:"AV37IsAuthorized_Update"});
   GridContainer.addRefreshingParm({rfrVar:"AV40IsAuthorized_Delete"});
   GridContainer.addRefreshingParm({rfrVar:"AV35IsAuthorized_UAAssociateFunctionalities"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.secroleww);});
