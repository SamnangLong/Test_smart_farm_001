var connection_status= false;
var msg_control = '';
var v1='0', v2='0' ,v3='0', v4='0',v5='0', v6='0';


setTimeout(function() {
    ConnectToMQTT();
  }, 1000);
function ConnectToMQTT(){
    // Generate a random number for the client ID
    const randomClientNumber = Math.floor(Math.random() * 1000) + 1;
    const clientID = 'SMART FARM' + randomClientNumber;
          host = 'pf-huhru7kr45jybh0pk1rs.cedalo.cloud';
          port = 443;

    // Create a client instance
    // client = new Paho.MQTT.Client('e8f424ec.emqx.cloud', 8083, "test");
    client = new Paho.MQTT.Client(host, Number(port), clientID);

    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // connect the client
    client.connect({
      onSuccess: onConnect,
      onFailure: function(error) {
        console.error("Connection failed:", error.errorMessage);
      },
      useSSL: true,
      userName: 'SAMNANG',
      password: 'samnang123',
      mqttVersion: 4,
      keepAliveInterval: 60
    });
    
    
}

function publishToMQTT(value) {
  // Replace this with your MQTT logic to publish the value
  // For example, you can use the Paho MQTT library:
  // client.send('your_topic', value);
  // console.log('Published to MQTT:', value);
  client.send('Control_V', value);

  console.log('Control_V', value);
}


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  connection_status = true ;
  // alert("Connect to server is success.");
  setTimeout(() => {
    console.log('Connection successful!');
  }, 2000);

  const subTopic1 = 'Monitor_Temp';
  const subTopic2 = 'Monitor_Humi';
  const subTopic3 = 'Monitor_B';


  qos = 0;
  client.subscribe(subTopic1);
  client.subscribe(subTopic2);
  client.subscribe(subTopic3);
}


// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+ responseObject.errorMessage);
    alert("MQTT Connection Lost");
  }
}



// Called when a message arrives
function onMessageArrived(message) {
  try {
    console.log("onMessageArrived:" + message.payloadString);
    const values = message.payloadString.split(',');


  // Display Data Temperature
  if (values[0] == 'Temp') {
    document.getElementById('T_ZONE1').value = values[1] || '';
    document.getElementById('T_ZONE2').value = values[2] || '';
    document.getElementById('T_ZONE3').value = values[3] || '';
  }

  // Display Data Humidity
  if (values[0] == 'Humi') {
    document.getElementById('H_ZONE1').value = values[1] || '';
    document.getElementById('H_ZONE2').value = values[2] || '';
    document.getElementById('H_ZONE3').value = values[3] || '';
  }


  if (values[0] == 'Button') {
    // Update the image source based on the button values
    const zone1Img = document.getElementById('ZONE1');
    if (values[1] == '1') {
      zone1Img.src = 'IMG/VAN1_ON.png';
      document.getElementById('switch1').checked=true ;
      v1='1';
    } if (values[1] == '0') {
      zone1Img.src = 'IMG/VAN1_OFF.png';
      document.getElementById('switch1').checked=false ;
      v1='0';
    }


    const zone2Img = document.getElementById('ZONE2');
    if (values[2] == '1') {
      zone2Img.src = 'IMG/VAN2_ON.png';
      document.getElementById('switch2').checked=true ;
      v2='1';
    } if (values[2] == '0') {
      zone2Img.src = 'IMG/VAN2_OFF.png';
      document.getElementById('switch2').checked=false ;
      v2='0';
    }

    const zone3Img = document.getElementById('ZONE3');
    if (values[3] == '1') {
      zone3Img.src = 'IMG/VAN3_ON.png';
      document.getElementById('switch3').checked=true ;
        v3='1';
    } if (values[3] == '0') {
      zone3Img.src = 'IMG/VAN3_OFF.png';
      document.getElementById('switch3').checked=false ;
        v3='0';
    }

    const zone4Img = document.getElementById('ZONE4');
    if (values[4] == '1') {
      zone4Img.src = 'IMG/VAN4_ON.png';
      document.getElementById('switch4').checked=true ;
      v4='1';
    } if (values[4] == '0') {
      zone4Img.src = 'IMG/VAN4_OFF.png';
      document.getElementById('switch4').checked=false ;
      v4='0';
    }

    const zone5Img = document.getElementById('ZONE5');
    if (values[5] == '1') {
      zone5Img.src = 'IMG/VAN5_ON.png';
      document.getElementById('switch5').checked=true ;
      v5='1';
    } if (values[5] == '0') {
      zone5Img.src = 'IMG/VAN5_OFF.png';
      document.getElementById('switch5').checked=false ;
      v5='0';
    }

    const zone6Img = document.getElementById('ZONE6');
    if (values[6] == '1') {
      zone6Img.src = 'IMG/VAN6_ON.png';
      document.getElementById('switch6').checked=true ;
      v6='1';
    } if (values[6] == '0') {
      zone6Img.src = 'IMG/VAN6_OFF.png';
      document.getElementById('switch6').checked=false ;
      v6='0';
    }
  }
  } catch (err) {
    console.error("Error processing message:", err);
  }
}

  
