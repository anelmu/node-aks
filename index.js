const express = require('express');
const k8s = require('@kubernetes/client-node');
const app = express();

app.get('/pods', async (req, res) => {
  try {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    const response = await k8sApi.listNamespacedPod({ namespace: 'default' });
    console.log('Pods:', response);
    res.json(response);
  }
  catch (error) {
    console.error('Error fetching pods:', error);
    res.status(500).send('Error fetching pods');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
