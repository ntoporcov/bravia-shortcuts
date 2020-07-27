import React from 'react';
import logo from './icons.png';
import setup from './setup.png';
import helper from './helper.png';
import power from './power.png';
import './App.css';

const Step = (props) =>{
  return(
      <div className={"step"}>
            {props.image? <img alt={"Thumbnail for setup shortcut"} src={props.image}/> :null}
            <h2>{props.title}</h2>
            <hr/>
            {props.description}
      </div>
  )
}

const Button = (props) =>{
    return <a href={props.url} style={{backgroundColor:props.color}} target={"_blank"} rel={"noopener noreferrer"}>{props.text}</a>
}

function App() {
  return (
    <div className="App">
      <img src={logo} alt={"shortcut Logos"} style={{maxWidth:500}}/>
      <h1>Bravia Controls</h1>

        <Step
          image={setup}
          title={"Setup TV for Shortcuts"}
          description={
              <div>
                  <h3>On Your Phone</h3>
                  <p>First we'll download and run a shortcut to create a config file in your phone.</p>
                  <Button url={"https://www.icloud.com/shortcuts/3ebc473b23ee47aca3ae504cd2b7534c"} text={"Download Setup Shortcut"}/>
                  <hr/>
                  <h3>On Your TV</h3>
                  <p>In your tv, we will need to access some network settings. So go to the android home and then head onto the settings panel. From there you'll need to go to the following places:</p>
                  <h4>Your Television IP</h4>
                  <p>
                      This is just the IP of your television within your network. You should find it at:
                      <br/><br/>
                      <i>Settings > Network > Advanced Settings > Network Status > IP Address</i>
                      <br/>
                      <h6>It usually starts with 192.168....</h6>
                  </p>
                  <h4>Setup a PSK</h4>
                  <p>
                      A PSK, or a Pre-Shared Key, is sort of a password between your television and other things trying to control it. To setup one you need to go to:
                      <br/><br/>
                      <i>Settings > Network > Home network > IP Control > Authentication</i>
                      <br/><br/>
                      Then inside Authentication we will select <i>Normal and Pre-Shared Key</i>
                      <br/><br/>
                      And then inside Pre-Shared Key, you will create one. Since only devices <b>inside</b> your network will be able to use this, it doesn't have to be super complex. I personally use 1234.
                  </p>
                  <hr/>
                  <h3>Now Back On Your Phone</h3>
                  <p>Run the shortcut we downloaded previously. It will ask you for both the IP and the PSK and save that information in a local file in your phone.</p>
              </div>
          }
        />

        <Step
          image={helper}
          title={"Download Helper Shortcuts"}
          description={
              <div>
                  <p>These are all required shortcuts for everything to work. You won't necessarily run them, but they make things easier.</p>
                  <h3>View Config Setup</h3>
                  <p>Ok, this one is optional. It just shows you the IP and PSK you entered previously.</p>
                  <Button url={"https://www.icloud.com/shortcuts/7026079addf6450e936039314bdbc90d"} text={"Download View Config Shortcut"}/>
                  <hr/>

                  <h3>Commands JSON/Dictionary</h3>
                  <p>Things get a little more programmy here. This shortcut holds the most common commands available for use.
                      The commands are essentially a combination of a capitalized Key Name (Play, Pause..) and a string of letters (the IRCC Commands). If you'd like to add more commands,
                      I recommend checking out this
                      <a className={"link"} href={"https://www.reddit.com/r/HomePod/comments/9p37ws/control_sony_tv_power_offon_via_hey_siri_on_your/?utm_source=reddit&utm_medium=usertext&utm_name=shortcuts&utm_content=t1_fzeu46g"}
                      target={"_blank"} rel={"noopener noreferrer"}
                      > reddit post that contains an extensive list of all commands available</a></p>
                  <Button url={"https://www.icloud.com/shortcuts/f35c9b1be1544144ad4e07993862551b"} text={"Download Commands Shortcut"}/>
                  <hr/>

                  <h3>Run IRCC Command</h3>
                  <p>This one grabs a key from the previous shortcut based on the provided key and sends it to the TV with the IP from the config using the PSK from the config.</p>
                  <Button url={"https://www.icloud.com/shortcuts/3ec9554536674ea7abda1d48caff60ea"} text={"Download Run IRCC Shortcut"}/>
                  <hr/>

                  <h3>Back to Springboard</h3>
                  <p>This isn't mine, but it works well for us. It just takes you back to the home page after a command is run.</p>
                  <Button url={"https://www.icloud.com/shortcuts/9cc28d884a5149f4b0b297f78fce13e1"} text={"Download Back to Springboard"}/>
              </div>
          }
        />

        <Step
            image={power}
            title={"Download Commands"}
            description={
                <div>
                    <p>These are the commands you can run.</p>
                    <Button url={"https://www.icloud.com/shortcuts/c500d523f8884173a4a267f4671e67d7"}
                            text={"Download Power Shortcut"}
                            color={"#06d1b1"}
                    />
                    <Button url={"https://www.icloud.com/shortcuts/dd37036d350c42868ebba8f5d2d17ca7"}
                            text={"Download Home Shortcut"}
                            color={"#8350bf"}
                    />
                    <Button url={"https://www.icloud.com/shortcuts/9772c4edd0384d1a8c49aa73156ce356"}
                            text={"Download Play Shortcut"}
                            color={"#73c972"}
                    />
                    <Button url={"https://www.icloud.com/shortcuts/25944a0d8a2d4a4a83402cf82a284364"}
                            text={"Download Pause Shortcut"}
                            color={"#73c972"}
                    />
                    <Button url={"https://www.icloud.com/shortcuts/6deb35576a2945f79c5585945193bce0"}
                            text={"Download OK Shortcut"}
                            color={"#ee8567"}
                    />
                    <Button url={"https://www.icloud.com/shortcuts/3d362b7ca09c44db823eb8f2d17a0fa0"}
                            text={"Download Back Shortcut"}
                            color={"#56b4f1"}
                    />
                    <Button url={"https://www.icloud.com/shortcuts/1c53fada1e6446a5ae60324fb50bd2dc"}
                            text={"Download Up Btn Shortcut"}
                            color={"#ebaf69"}
                    />
                    <Button url={"https://www.icloud.com/shortcuts/eb904a9cb14d48d5bee736826c94191c"}
                            text={"Download Down Btn Shortcut"}
                            color={"#ebaf69"}
                    />
                    <Button url={"https://www.icloud.com/shortcuts/3e4abfa208284e18adb3335530e109a4"}
                            text={"Download Left Btn Shortcut"}
                            color={"#ebaf69"}
                    />
                    <Button url={"https://www.icloud.com/shortcuts/70a89013b0684625b268a60b47efada5"}
                            text={"Download Right Btn Shortcut"}
                            color={"#ebaf69"}
                    />
                </div>
            }
        />

        <Step
            image={null}
            title={"Current Limitations"}
            description={
                <div>
                    <p>You won't be able to setup multiple tvs on the same phone. It should be doable though, I just didn't do it</p>
                    <p>You have to be connected to the same network as the tv, of course.</p>
                    <p>It looks like running commands right after the other some times doesn't work. Not sure this can be fixed though.</p>
                </div>
            }
        />

    </div>
  );
}

export default App;
