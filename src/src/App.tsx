import './App.css';
import { Terminal } from './terminal';

import { AwsRum, AwsRumConfig } from 'aws-rum-web';

export let awsRum: AwsRum | undefined;
try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    guestRoleArn:
      'arn:aws:iam::913228560460:role/RUM-Monitor-ap-southeast-2-913228560460-2970317094761-Unauth',
    identityPoolId: 'ap-southeast-2:d1ea8cc2-dcbd-445e-ac90-8fdc70536e47',
    endpoint: 'https://dataplane.rum.ap-southeast-2.amazonaws.com',
    telemetries: ['performance', 'errors', 'http'],
    allowCookies: true,
    enableXRay: false
  };

  const APPLICATION_ID = '53c2f166-f5f6-4175-a005-906364026578';
  const APPLICATION_VERSION = '1.0.0';
  const APPLICATION_REGION = 'ap-southeast-2';

  awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}
function App() {
  return (
    <div className="App">
      <Terminal />
    </div>
  );
}

export default App;
