export class MotionSensor {
    deviceName: string;
    deviceID: string;
    lastActive : string;
    location: string;
    stateChanged: string;
    motion: string;
    battery: string;
    temperature: string;
    
constructor(sensor:any) {
    this.deviceName = sensor.deviceName;
    this.deviceID = sensor.deviceID;
    this.lastActive = sensor.lastActive;
    this.location = sensor.location;
    this.stateChanged = sensor.stateChanged;
    this.motion = sensor.motion;
    this.battery = sensor.battery;
    this.temperature = sensor.temperature;
    }
}
    
     