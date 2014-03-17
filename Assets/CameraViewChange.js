function Update () {
 if(Input.GetKey("1")){
  cameraSwap(1);
 }
 if(Input.GetKey("2")){
  cameraSwap(2);
 }
 if(Input.GetKey("3")){
  cameraSwap(3);
 }
}
 
function cameraSwap(currentCam : int){
 var cameras = GameObject.FindGameObjectsWithTag("camera");
 
 for (var cams : GameObject in cameras){
  cams.GetComponent(Camera).enabled = false;
 }  
 
 var cameraToUse : String = "Camera"+currentCam;
 gameObject.Find(cameraToUse).GetComponent(Camera).enabled = true;
}