var path = require("path");

/**
 * GET /stu3/cds-services/
 *
 * accept: application/json
 * host: localhost:8090
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/3.8.3
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("x-content-type-options", "nosniff");
  res.setHeader("x-xss-protection", "1; mode=block");
  res.setHeader("cache-control", "no-cache, no-store, max-age=0, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-frame-options", "DENY");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Mon, 29 Oct 2018 11:27:33 GMT");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJzZXJ2aWNlcyI6W3siaWQiOiJvcmRlci1yZXZpZXctY3JkIiwiaG9vayI6Im9yZGVyLXJldmlldyIsInRpdGxlIjoib3JkZXItcmV2aWV3IENvdmVyYWdlIFJlcXVpcmVtZW50cyBEaXNjb3ZlcnkiLCJkZXNjcmlwdGlvbiI6IkdldCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhlIGNvdmVyYWdlIHJlcXVpcmVtZW50cyBmb3IgZHVyYWJsZSBtZWRpY2FsIGVxdWlwbWVudCIsInByZWZldGNoIjp7Im51dHJpdGlvbk9yZGVyQnVuZGxlIjoiTnV0cml0aW9uT3JkZXI/X2lkPXt7Y29udGV4dC5vcmRlcnMuTnV0cml0aW9uT3JkZXIuaWR9fSZfaW5jbHVkZT1OdXRyaXRpb25PcmRlcjpwYXRpZW50Jl9pbmNsdWRlPU51dHJpdGlvbk9yZGVyOnByb3ZpZGVyJl9pbmNsdWRlPU51dHJpdGlvbk9yZGVyOnJlcXVlc3RlciZfaW5jbHVkZT1OdXRyaXRpb25PcmRlcjplbmNvdW50ZXImX2luY2x1ZGU9RW5jb251dGVyOmxvY2F0aW9uJl9pbmNsdWRlPU51dHJpdGlvbk9yZGVyOmluc3VyYW5jZTpDb3ZlcmFnZSIsInJlZmVycmFsUmVxdWVzdCI6IlJlZmVycmFsUmVxdWVzdD9faWQ9e3tjb250ZXh0Lm9yZGVycy5SZWZlcnJhbFJlcXVlc3QuaWR9fSZfaW5jbHVkZT1SZWZlcnJhbFJlcXVlc3Q6cGF0aWVudCZfaW5jbHVkZT1SZWZlcnJhbFJlcXVlc3Q6cmVjaXBpZW50Jl9pbmNsdWRlPVJlZmVycmFsUmVxdWVzdDpyZXF1ZXN0ZXImX2luY2x1ZGU9UmVmZXJyYWxSZXF1ZXN0Om9uLWJlaGFsZiZfaW5jbHVkZT1SZWZlcnJhbFJlcXVlc3Q6aW5zdXJhbmNlOkNvdmVyYWdlIiwicHJvY2VkdXJlUmVxdWVzdEJ1bmRsZSI6IlByb2NlZHVyZVJlcXVlc3Q/X2lkPXt7Y29udGV4dC5vcmRlcnMuUHJvY2VkdXJlUmVxdWVzdC5pZH19Jl9pbmNsdWRlPVByb2NlZHVyZVJlcXVlc3Q6cGF0aWVudCZfaW5jbHVkZT1Qcm9jZWR1cmVSZXF1ZXN0OnBlcmZvcm1lciZfaW5jbHVkZT1Qcm9jZWR1cmVSZXF1ZXN0OnJlcXVlc3RlciZfaW5jbHVkZT1Qcm9jZWR1cmVSZXF1ZXN0Om9uLWJlaGFsZiZfaW5jbHVkZT1Qcm9jZWR1cmVSZXF1ZXN0Omluc3VyYW5jZTpDb3ZlcmFnZSIsIm1lZGljYXRpb25SZXF1ZXN0QnVuZGxlIjoiTWVkaWNhdGlvblJlcXVlc3Q/X2lkPXt7Y29udGV4dC5vcmRlcnMuTWVkaWNhdGlvblJlcXVlc3QuaWR9fSZfaW5jbHVkZT1NZWRpY2F0aW9uUmVxdWVzdDpwYXRpZW50Jl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0OmludGVuZGVkLWRpc3BlbnNlciZfaW5jbHVkZT1NZWRpY2F0aW9uUmVxdWVzdDpyZXF1ZXN0ZXI6UHJhY3RpdGlvbmVyJl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0Om1lZGljYXRpb24mX2luY2x1ZGU9TWVkaWNhdGlvblJlcXVlc3Q6b24tYmVoYWxmJl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0Omluc3VyYW5jZTpDb3ZlcmFnZSIsImRldmljZVJlcXVlc3RCdW5kbGUiOiJEZXZpY2VSZXF1ZXN0P19pZD17e2NvbnRleHQub3JkZXJzLkRldmljZVJlcXVlc3QuaWR9fSZfaW5jbHVkZT1EZXZpY2VSZXF1ZXN0OnBhdGllbnQmX2luY2x1ZGU9RGV2aWNlUmVxdWVzdDpwZXJmb3JtZXImX2luY2x1ZGU9RGV2aWNlUmVxdWVzdDpyZXF1ZXN0ZXImX2luY2x1ZGU9RGV2aWNlUmVxdWVzdDpkZXZpY2UmX2luY2x1ZGU9RGV2aWNlUmVxdWVzdDpvbi1iZWhhbGYmX2luY2x1ZGU9RGV2aWNlUmVxdWVzdDppbnN1cmFuY2U6Q292ZXJhZ2UiLCJzdXBwbHlSZXF1ZXN0QnVuZGxlIjoiU3VwcGx5UmVxdWVzdD9faWQ9e3tjb250ZXh0Lm9yZGVycy5TdXBwbHlSZXF1ZXN0LmlkfX0mX2luY2x1ZGU9U3VwcGx5UmVxdWVzdDpwYXRpZW50Jl9pbmNsdWRlPVN1cHBseVJlcXVlc3Q6c3VwcGxpZXI6T3JnYW5pemF0aW9uJl9pbmNsdWRlPVN1cHBseVJlcXVlc3Q6cmVxdWVzdGVyOlByYWN0aXRpb25lciZfaW5jbHVkZT1TdXBwbHlSZXF1ZXN0OnJlcXVlc3RlcjpPcmdhbml6YXRpb24mX2luY2x1ZGU9U3VwcGx5UmVxdWVzdDppbnN1cmFuY2U6Q292ZXJhZ2UifSwicHJlZmV0Y2hFbGVtZW50cyI6W3sia2V5IjoiZGV2aWNlUmVxdWVzdEJ1bmRsZSIsInF1ZXJ5IjoiRGV2aWNlUmVxdWVzdD9faWQ9e3tjb250ZXh0Lm9yZGVycy5EZXZpY2VSZXF1ZXN0LmlkfX0mX2luY2x1ZGU9RGV2aWNlUmVxdWVzdDpwYXRpZW50Jl9pbmNsdWRlPURldmljZVJlcXVlc3Q6cGVyZm9ybWVyJl9pbmNsdWRlPURldmljZVJlcXVlc3Q6cmVxdWVzdGVyJl9pbmNsdWRlPURldmljZVJlcXVlc3Q6ZGV2aWNlJl9pbmNsdWRlPURldmljZVJlcXVlc3Q6b24tYmVoYWxmJl9pbmNsdWRlPURldmljZVJlcXVlc3Q6aW5zdXJhbmNlOkNvdmVyYWdlIiwicmV0dXJuVHlwZSI6Im9yZy5obDcuZmhpci5kc3R1My5tb2RlbC5CdW5kbGUifSx7ImtleSI6InN1cHBseVJlcXVlc3RCdW5kbGUiLCJxdWVyeSI6IlN1cHBseVJlcXVlc3Q/X2lkPXt7Y29udGV4dC5vcmRlcnMuU3VwcGx5UmVxdWVzdC5pZH19Jl9pbmNsdWRlPVN1cHBseVJlcXVlc3Q6cGF0aWVudCZfaW5jbHVkZT1TdXBwbHlSZXF1ZXN0OnN1cHBsaWVyOk9yZ2FuaXphdGlvbiZfaW5jbHVkZT1TdXBwbHlSZXF1ZXN0OnJlcXVlc3RlcjpQcmFjdGl0aW9uZXImX2luY2x1ZGU9U3VwcGx5UmVxdWVzdDpyZXF1ZXN0ZXI6T3JnYW5pemF0aW9uJl9pbmNsdWRlPVN1cHBseVJlcXVlc3Q6aW5zdXJhbmNlOkNvdmVyYWdlIiwicmV0dXJuVHlwZSI6Im9yZy5obDcuZmhpci5kc3R1My5tb2RlbC5CdW5kbGUifSx7ImtleSI6Im51dHJpdGlvbk9yZGVyQnVuZGxlIiwicXVlcnkiOiJOdXRyaXRpb25PcmRlcj9faWQ9e3tjb250ZXh0Lm9yZGVycy5OdXRyaXRpb25PcmRlci5pZH19Jl9pbmNsdWRlPU51dHJpdGlvbk9yZGVyOnBhdGllbnQmX2luY2x1ZGU9TnV0cml0aW9uT3JkZXI6cHJvdmlkZXImX2luY2x1ZGU9TnV0cml0aW9uT3JkZXI6cmVxdWVzdGVyJl9pbmNsdWRlPU51dHJpdGlvbk9yZGVyOmVuY291bnRlciZfaW5jbHVkZT1FbmNvbnV0ZXI6bG9jYXRpb24mX2luY2x1ZGU9TnV0cml0aW9uT3JkZXI6aW5zdXJhbmNlOkNvdmVyYWdlIiwicmV0dXJuVHlwZSI6Im9yZy5obDcuZmhpci5kc3R1My5tb2RlbC5CdW5kbGUifSx7ImtleSI6Im1lZGljYXRpb25SZXF1ZXN0QnVuZGxlIiwicXVlcnkiOiJNZWRpY2F0aW9uUmVxdWVzdD9faWQ9e3tjb250ZXh0Lm9yZGVycy5NZWRpY2F0aW9uUmVxdWVzdC5pZH19Jl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0OnBhdGllbnQmX2luY2x1ZGU9TWVkaWNhdGlvblJlcXVlc3Q6aW50ZW5kZWQtZGlzcGVuc2VyJl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0OnJlcXVlc3RlcjpQcmFjdGl0aW9uZXImX2luY2x1ZGU9TWVkaWNhdGlvblJlcXVlc3Q6bWVkaWNhdGlvbiZfaW5jbHVkZT1NZWRpY2F0aW9uUmVxdWVzdDpvbi1iZWhhbGYmX2luY2x1ZGU9TWVkaWNhdGlvblJlcXVlc3Q6aW5zdXJhbmNlOkNvdmVyYWdlIiwicmV0dXJuVHlwZSI6Im9yZy5obDcuZmhpci5kc3R1My5tb2RlbC5CdW5kbGUifSx7ImtleSI6InByb2NlZHVyZVJlcXVlc3RCdW5kbGUiLCJxdWVyeSI6IlByb2NlZHVyZVJlcXVlc3Q/X2lkPXt7Y29udGV4dC5vcmRlcnMuUHJvY2VkdXJlUmVxdWVzdC5pZH19Jl9pbmNsdWRlPVByb2NlZHVyZVJlcXVlc3Q6cGF0aWVudCZfaW5jbHVkZT1Qcm9jZWR1cmVSZXF1ZXN0OnBlcmZvcm1lciZfaW5jbHVkZT1Qcm9jZWR1cmVSZXF1ZXN0OnJlcXVlc3RlciZfaW5jbHVkZT1Qcm9jZWR1cmVSZXF1ZXN0Om9uLWJlaGFsZiZfaW5jbHVkZT1Qcm9jZWR1cmVSZXF1ZXN0Omluc3VyYW5jZTpDb3ZlcmFnZSIsInJldHVyblR5cGUiOiJvcmcuaGw3LmZoaXIuZHN0dTMubW9kZWwuQnVuZGxlIn0seyJrZXkiOiJyZWZlcnJhbFJlcXVlc3QiLCJxdWVyeSI6IlJlZmVycmFsUmVxdWVzdD9faWQ9e3tjb250ZXh0Lm9yZGVycy5SZWZlcnJhbFJlcXVlc3QuaWR9fSZfaW5jbHVkZT1SZWZlcnJhbFJlcXVlc3Q6cGF0aWVudCZfaW5jbHVkZT1SZWZlcnJhbFJlcXVlc3Q6cmVjaXBpZW50Jl9pbmNsdWRlPVJlZmVycmFsUmVxdWVzdDpyZXF1ZXN0ZXImX2luY2x1ZGU9UmVmZXJyYWxSZXF1ZXN0Om9uLWJlaGFsZiZfaW5jbHVkZT1SZWZlcnJhbFJlcXVlc3Q6aW5zdXJhbmNlOkNvdmVyYWdlIiwicmV0dXJuVHlwZSI6Im9yZy5obDcuZmhpci5kc3R1My5tb2RlbC5CdW5kbGUifV19LHsiaWQiOiJtZWRpY2F0aW9uLXByZXNjcmliZS1jcmQiLCJob29rIjoibWVkaWNhdGlvbi1wcmVzY3JpYmUiLCJ0aXRsZSI6Im1lZGljYXRpb24tcHJlc2NyaWJlIENvdmVyYWdlIFJlcXVpcmVtZW50cyBEaXNjb3ZlcnkiLCJkZXNjcmlwdGlvbiI6IkdldCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhlIGNvdmVyYWdlIHJlcXVpcmVtZW50cyBmb3IgZHVyYWJsZSBtZWRpY2FsIGVxdWlwbWVudCIsInByZWZldGNoIjp7Im1lZGljYXRpb25SZXF1ZXN0QnVuZGxlIjoiTWVkaWNhdGlvblJlcXVlc3Q/X2lkPXt7Y29udGV4dC5vcmRlcnMuTWVkaWNhdGlvblJlcXVlc3QuaWR9fSZfaW5jbHVkZT1NZWRpY2F0aW9uUmVxdWVzdDpwYXRpZW50Jl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0OmludGVuZGVkLWRpc3BlbnNlciZfaW5jbHVkZT1NZWRpY2F0aW9uUmVxdWVzdDpyZXF1ZXN0ZXI6UHJhY3RpdGlvbmVyJl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0Om1lZGljYXRpb24mX2luY2x1ZGU9TWVkaWNhdGlvblJlcXVlc3Q6b24tYmVoYWxmJl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0Omluc3VyYW5jZTpDb3ZlcmFnZSJ9LCJwcmVmZXRjaEVsZW1lbnRzIjpbeyJrZXkiOiJtZWRpY2F0aW9uUmVxdWVzdEJ1bmRsZSIsInF1ZXJ5IjoiTWVkaWNhdGlvblJlcXVlc3Q/X2lkPXt7Y29udGV4dC5vcmRlcnMuTWVkaWNhdGlvblJlcXVlc3QuaWR9fSZfaW5jbHVkZT1NZWRpY2F0aW9uUmVxdWVzdDpwYXRpZW50Jl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0OmludGVuZGVkLWRpc3BlbnNlciZfaW5jbHVkZT1NZWRpY2F0aW9uUmVxdWVzdDpyZXF1ZXN0ZXI6UHJhY3RpdGlvbmVyJl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0Om1lZGljYXRpb24mX2luY2x1ZGU9TWVkaWNhdGlvblJlcXVlc3Q6b24tYmVoYWxmJl9pbmNsdWRlPU1lZGljYXRpb25SZXF1ZXN0Omluc3VyYW5jZTpDb3ZlcmFnZSIsInJldHVyblR5cGUiOiJvcmcuaGw3LmZoaXIuZHN0dTMubW9kZWwuQnVuZGxlIn1dfV19", "base64"));
  res.end();

  return __filename;
};
