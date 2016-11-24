#pragma strict

var speedRight = 0.3;
var speedLeft = 0.3;
var speedForwad = 0.5;
var speedBack = 0.2;


function Start () {

Debug.Log( 1 + 2 );

}


function Update () {

var pSpeed = GetComponent.<Transform>();
pSpeed.position.z = pSpeed.position.z + 0.5;



var MoveLR = GetComponent.<Transform>();


if ( Input.GetKey(KeyCode.D) ) {

MoveLR.position.x = MoveLR.position.x + speedRight;

}

if (Input.GetKey(KeyCode.A)) {

MoveLR.position.x = MoveLR.position.x - speedLeft;

}

if (Input.GetKey(KeyCode.W)) {

pSpeed.position.z = pSpeed.position.z + speedForwad;

}

if (Input.GetKey(KeyCode.S)) {

pSpeed.position.z = pSpeed.position.z - speedBack;

}




}