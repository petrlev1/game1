using UnityEngine;
using System.Collections;

public class colis : MonoBehaviour {
    
    void OnCollisionEnter(Collision collision) {
		if (collision.rigidbody) Debug.Log ( "Удар" );
	}

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
