<MDG.Selections model="C:\Users\BHoughtaling\Documents\GitHub\CompassionEA\CITechnology Builder\CITechnology Builder 2.eap">
	<Technology id="CITech" name="Compassion Technology" version="9.1.1" notes="Compassion International Technology&#xA;03/27/2015&#xA;   Moved all files to GitHub&#xA;03/10/2015&#xA;   Added CIPaperForm element&#xA;03/10/2015&#xA;   Added CIFormAttribute stereotype.&#xA;03/06/2015&#xA;   Bug Fix to pick up deletes&#xA;03/04/2015&#xA;   Improved 3 existing scripts and added script &#xA;   to do Physical to Logical attribute mapping.&#xA;03/03/2015&#xA;   Improved Physical Data Model Dictionary&#xA;02/25/2015&#xA;   Testing Version 12 of Sparx&#xA;02/04/2015&#xA;   Added Report: PDM_for_SFDC_Comparison - creates an unformatted spreadsheet that is then used to compare the PDM to SFDC,&#xA;01/14/2015&#xA;   Added Search: CI_FindCIDataAttribute_LogicalOrhpans - helps find CIDataAttributes that do not have a relationship to a logical attribute.&#xA;   Modified: Report: Physical_Data_Dictionary_Workbook - resolved FieldValues not populating when the DataType is something other then a Picklist.&#xA;  Modified: Report: Physical_Data_Model - resolved FieldValues not populating when the DataType is something other then a Picklist. " filename="C:\Users\BHoughtaling\Documents\GitHub\CompassionEA\CITechnology Builder\CITechnology.xml"/>
	<Profiles directory="C:\Users\BHoughtaling\Documents\GitHub\CompassionEA\CITechnology Builder" files="CIProfile.xml"/>
	<TagVals tags="BusinessOrg,FieldLength,FieldValue,Precision,Scale,SystemOwner,SystemType"/>
	<Transforms>
		<Transform product="Physical Model to CI Data Model" codetypes="0" codetemplates="1" grammar="" codeoptions=""/>
	</Transforms>
	<DiagramProfile directory="C:\Users\BHoughtaling\Documents\GitHub\CompassionEA\CITechnology Builder" files="CIDiagramProfile.xml"/>
	<UIToolboxes directory="C:\Users\BHoughtaling\Documents\GitHub\CompassionEA\CITechnology Builder" files="CIToolboxProfile.xml"/>
	<ModelSearches2>
		<ModelSearch guid="{05D55F6F-996C-4bf7-A630-9976DEA1BB5D}" name="CI_IntermediateModelElements&amp;Attributes"/>
		<ModelSearch guid="{79EF0C3B-F442-4a6d-BCEE-4B8291CD6623}" name="CI_ConceptualToLogicalMapping"/>
		<ModelSearch guid="{7562C6EF-4A38-4f04-AA99-CC946AB48C35}" name="CI_FindCIDataAttributeGUID_Security"/>
		<ModelSearch guid="{4303A0D0-C864-4abf-9045-1EACE22FDF2B}" name="CI_PhysicalData_MessageType_Mapping"/>
		<ModelSearch guid="{4FC431CA-2338-470a-81A1-B4192CF95D6B}" name="CI_FindTransformedAttributesWithNoTableColumn"/>
		<ModelSearch guid="{35D4A506-CD0D-405f-A3A3-9D61255CB1D6}" name="CI_FindIssues"/>
		<ModelSearch guid="{11AD9073-84C9-4d75-B5E7-5948DA5BE9A4}" name="CI_LogicalEntityDefinitions"/>
		<ModelSearch guid="{AA32D6A4-39BF-4707-9E10-5C1750939974}" name="CI_GetLogicalToPhysicalRelationships"/>
		<ModelSearch guid="{2EBBC189-9452-4fdc-86E1-8AA6051079E0}" name="CI_LogicalData_MessageType_Mapping"/>
		<ModelSearch guid="{75EF82BF-EA9D-470e-B819-A3C45177E58B}" name="CI_LogicalAttributeDefinitions"/>
		<ModelSearch guid="{2596032D-59F6-4f6c-BCAC-48111C22A316}" name="CI_MessageType_Data_Mapping"/>
		<ModelSearch guid="{79021906-F4BA-4b1f-B49D-27E40639D176}" name="CI_NotInSpreadsheetLoad"/>
		<ModelSearch guid="{A0321A5F-497F-4d7f-9378-0DF9E9619AA4}" name="CI_SecurityTest"/>
		<ModelSearch guid="{35B9F8D7-4350-43ab-8213-4C26ABA69EA9}" name="CI_GetLogicalEntityRelationships"/>
		<ModelSearch guid="{597B7862-3637-43b8-B02B-F5B6560DBE90}" name="CI_FindLogicalMasterDataObjects"/>
		<ModelSearch guid="{19D9771E-BF3C-4e96-8ADE-BB1B0C6F5FFA}" name="CI_FindDeletedSFDC"/>
		<ModelSearch guid="{B952F872-BD3C-4953-A53A-55B0DF24FD29}" name="CI_MessageType_LogicalData_Mapping"/>
		<ModelSearch guid="{98A102AB-7F99-45d6-A3C3-8B721E261942}" name="CI_MessageType_PhysicalData_Mapping"/>
		<ModelSearch guid="{AEDBCF49-75BF-4f60-BE78-871D95C6FDC0}" name="CI_GetPhysicalForeignKeyRelationships"/>
	</ModelSearches2>
	<Scripts>
		<Script id="{AF944014-3998-42ff-9CCA-4FE27AEA8CEB}" name="Release View" type="normal" language="VBScript"/>
		<Script id="{D8D98882-500B-43c6-A9C7-ED342C666D58}" name="MetadataFunctionalSpecification_Section1_9" type="normal" language="VBScript"/>
		<Script id="{2D94BD4B-17A8-4432-8F3B-142CDEF8A5C5}" name="PhysicalDataModelDesign_Relationships" type="normal" language="VBScript"/>
		<Script id="{700F86F0-053C-4526-ABC1-17B7C92A8B6E}" name="TransformPhysicalToLogicalAttribute" type="normal" language="VBScript"/>
		<Script id="{48E882D5-9140-4ffa-A50D-06654FC4A8F1}" name="Import: ChangedSalesforceData" type="normal" language="VBScript"/>
		<Script id="{591DC3F0-75D7-4de7-827B-36FC5C705E91}" name="Report: ICP_Collected_Data" type="normal" language="VBScript"/>
		<Script id="{0D3F4E82-FCD3-4e0b-ADB8-FA6F80D0DAAC}" name="Report: Physical Data Dictionary" type="normal" language="VBScript"/>
		<Script id="{4AD4E975-E1F1-44f7-887A-C5BBFDCDAA06}" name="SetERDAttributeSecurityClassification" type="normal" language="VBScript"/>
		<Script id="{C878FEF6-704C-4889-AD62-29CC5AF90FCF}" name="PropagateIsMasterDataAttribute" type="normal" language="VBScript"/>
		<Script id="{4430ABCF-8461-4299-A30F-D548F1244D7B}" name="ConceptualLogicalPhysicalDataMap" type="normal" language="VBScript"/>
		<Script id="{870184A6-5AD9-4b2a-B174-1CD9A936A36F}" name="PropagateERDIsMasterData" type="normal" language="VBScript"/>
		<Script id="{4599860D-54C3-4b67-9E84-954DB5CB9D01}" name="Report: Consolidated_Conceptual_Logical_Physical_Workbook" type="normal" language="VBScript"/>
		<Script id="{5CCFEAE1-323C-45b0-9F10-D24F0CCE12FF}" name="MetadataFunctionalSpecification_Section1_5_6_Only" type="normal" language="VBScript"/>
		<Script id="{EB364AF6-D841-4f25-8C28-C66345C3EB3D}" name="SetCIDataAttributeSecurityClassification" type="normal" language="VBScript"/>
		<Script id="{88375483-24AD-43a3-A156-C24CCC321EC5}" name="AsociateERDAttributesToEntity" type="normal" language="VBScript"/>
		<Script id="{DC9CFA4A-2ED5-43a0-8219-FA346EA4F175}" name="UpdatePhysicalAttributeSecurityClassification" type="normal" language="VBScript"/>
		<Script id="{E0DC5FA4-987F-4736-B720-6BFA2AB5E57F}" name="PhysicalLogicalDataMap" type="normal" language="VBScript"/>
		<Script id="{40F5938E-BB84-4e8d-BD68-FB5F2BB8CD6A}" name="MetadataFunctionalSpecification_Section1_7_Only" type="normal" language="VBScript"/>
		<Script id="{4CD1AB28-B281-4d63-9ED4-B0FAA595E700}" name="Report: PDM for SFDC Comparison" type="normal" language="VBScript"/>
		<Script id="{3FB5C67E-FD3A-403f-BB06-4DEFD6EB24D6}" name="UpdateDataAttributes" type="normal" language="VBScript"/>
		<Script id="{BF2A92AB-27AC-4707-B8BC-A97B3813AEC2}" name="PropagateMasterDataValue" type="normal" language="VBScript"/>
		<Script id="{81667204-4476-4a3a-B5BE-D9054458FFA9}" name="Retention View" type="normal" language="VBScript"/>
		<Script id="{5577DB92-3EB4-4335-833A-96E55CA2B77D}" name="CommonFunctions" type="normal" language="VBScript"/>
		<Script id="{E189BEF7-9797-49d4-93B5-BB1A086354FE}" name="MetadataFunctionalSpecification_Section1_5_6" type="normal" language="VBScript"/>
		<Script id="{2AC8A21C-785D-4589-AA25-ED01BE077356}" name="MetadataFunctionalSpecification_Section1_12_14" type="normal" language="VBScript"/>
		<Script id="{0DDF2561-4B15-462e-A706-30B264BA61AA}" name="MetadataFunctionalSpecification_Section1_8" type="normal" language="VBScript"/>
		<Script id="{71CCD12C-FECF-49a7-9A01-1BD88E10A51E}" name="MetadataFunctionalSpecification_Section1_9_Only" type="normal" language="VBScript"/>
		<Script id="{AA95AFFE-7FCC-4a5d-A553-FD95B64187D2}" name="MetadataFunctionalSpecification_Section2_1" type="normal" language="VBScript"/>
		<Script id="{791D290E-208E-44f2-AECD-5D98F2023F79}" name="CleanupCIDataAttributesBySystem" type="normal" language="VBScript"/>
		<Script id="{FB1DC9DA-C378-4968-B4BA-D3D72729E546}" name="PropagateIsMasterDataEntity" type="normal" language="VBScript"/>
		<Script id="{15A131E1-D1A0-4e5d-89B4-D43BD5C7221A}" name="MetadataFunctionalSpecification_Section1_8_Only" type="normal" language="VBScript"/>
		<Script id="{09CFAD8D-C23D-4dfd-82E5-B83FF8ACDA50}" name="MetadataFunctionalSpecification_Section1_12_14_Only" type="normal" language="VBScript"/>
		<Script id="{AE977FA9-5899-47f6-B769-2A1FBA63FDF4}" name="MetadataFunctionalSpecification_Section2_1_Only" type="normal" language="VBScript"/>
		<Script id="{BA355695-48CD-4515-A247-0776CF78677F}" name="Import: SalesforceData" type="normal" language="VBScript"/>
		<Script id="{4B329F50-A09A-46fd-9145-A2D77436F086}" name="MetadataFunctionalSpecification_Section1_7" type="normal" language="VBScript"/>
		<Script id="{DF415876-8E86-4713-830F-356CA517123F}" name="UpdateLogicalAttributeSecurityClassification" type="normal" language="VBScript"/>
		<Script id="{0AE17DB9-AACA-4ff3-8CA2-FB4AAFA77A2D}" name="PurgeCIDataAttributes" type="normal" language="VBScript"/>
		<Script id="{E3F982D1-8F42-4697-BE09-D5A89454C939}" name="PhysicalLogicalDataMapByPackage" type="normal" language="VBScript"/>
		<Script id="{F6B67367-3F80-4e56-BB7F-7ACD43393EB3}" name="ClearCIDataAttributeSecurityClassification" type="normal" language="VBScript"/>
		<Script id="{93E8B0EF-DB57-476d-B4F7-FBAA7340FD8F}" name="TransformTablesToERD" type="normal" language="VBScript"/>
		<Script id="{6B22291B-6181-451a-B39E-4CDD319FF381}" name="PhysicalDataModelDesign_Map" type="normal" language="VBScript"/>
		<Script id="{A0674ADD-3787-4f01-99EF-969D2FD8DB72}" name="ClearERDAttributeSecurityClassification" type="normal" language="VBScript"/>
		<Script id="{6019EEF0-241A-4cf0-8571-6F4270E74F00}" name="MetadataFunctionalSpecification_Complete" type="normal" language="VBScript"/>
		<Script id="{27A90C19-1D25-4db2-9587-7E224F02AAD9}" name="Import: SalesforcePicklists" type="normal" language="VBScript"/>
		<Script id="{8780A007-6886-4f7a-8C38-2C2146267529}" name="Report: Changes to Physical Data Model" type="normal" language="VBScript"/>
		<Script id="{6E593F5E-8B11-445f-90C5-DFC3E85EA25B}" name="Report: Physical to Logical Mapping with Orphans" type="normal" language="VBScript"/>
		<Script id="{854111DD-9F78-4029-90BE-5AC4CD25089F}" name="ExportToExcel" type="normal" language="VBScript"/>
	</Scripts>
</MDG.Selections>
