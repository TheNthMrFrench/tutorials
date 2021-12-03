#target Illustrator

function manipulatingIllustratorObjectsTutorial()
{
	#include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Utilities_Container.jsxbin";
    #include "/Volumes/Customization/Library/Scripts/Script_Resources/Data/Batch_Framework.jsxbin";

	/*
    if(app.documents.length < 1)
	{
		//there are no open documents..
		//alert the user and exist script
		alert("Please open a document and try again");
		return;
	}
    */
    batchInit(containerFunction,"readme text.. this is optional")

    function containerFunction()
    {

	    var doc = app.activeDocument; //whichever document is open at the moment
	
	    var layers = doc.layers;
	    var swatches = doc.swatches;
	    var artboards = doc.artboards;
        var fname = activeDocument.name;

        var garmentLayer = layers[0];

        var informationLayer = findSpecificLayer(garmentLayer, "Information");
        var mockupLayer = findSpecificLayer(garmentLayer, "Mockup");   

        var textFrame;
        var find, initialSearch, searchRelocated;

        function findText()
        {
            informationLayer.locked = false;
            find = "SNAP";
            initialSearch = mockupLayer.textFrames.length
            searchRelocated = informationLayer.textFrames.length
            for (i =initialSearch - 1; i>=0; i--)
                {if(mockupLayer.textFrames[i].contents == find)
                    {mockupLayer.textFrames[i].move(informationLayer, ElementPlacement.PLACEATBEGINNING);}
                }
            for (i =searchRelocated - 1; i>=0; i--)
                {if(informationLayer.textFrames[i].name == find)
                    {informationLayer.textFrames[i].name = "Snap Color";}
                }
            informationLayer.locked = true;
        }
        findText();

        return undefined;
        
        batchInit() 
    }
    containerFunction();
       
    


   

}
manipulatingIllustratorObjectsTutorial();
