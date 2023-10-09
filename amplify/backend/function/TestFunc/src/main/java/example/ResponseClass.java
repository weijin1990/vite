/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

package example;

import java.util.HashMap;
import java.util.Map;
        
     public class ResponseClass {
        int statusCode;
        String body;
        Map<String, String> headers = new HashMap<>();

        public String getBody() {
            return this.body;
        }

        public void setBody(String body) {
            this.body = body;
        }

        public int getStatusCode() {
            return this.statusCode;
        }

        public void setStatusCode(int statusCode) {
            this.statusCode = statusCode;
        }
        
        public Map<String, String> getHeaders() {
            return this.headers;
        }

        public void setHeaders(Map<String, String> headers) {
            this.headers = headers;
        }

        public ResponseClass(String body) {
            this.statusCode = 200;
            this.body = body;
            this.headers.put("Content-Type", "application/json");
        }
    }