#pragma strict

function Start () {

}

function Update () {
    
    transform.rotation = Input.gyro.attitude;

}