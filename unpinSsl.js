// frida -U -f com.lovense.wear -l unpinSsl.js

Java.perform(function() {
    var sslContext = Java.use("javax.net.ssl.SSLContext")
    var X509TrustManager = Java.use("javax.net.ssl.X509TrustManager")

    var trustManager = Java.registerClass({
        name: "com.lovense.wear.TrustManager",
        implements: [X509TrustManager],
        methods: {
            checkClientTrusted: function(chain, authType) {},
            checkServerTrusted: function(chain, authType) {},
            getAcceptedIssuers: function() {
                return []
            }
        }
    })

    var trustManagers = [trustManager.$new()]

    var sslContextInit = sslContext.init.overload("[Ljavax.net.ssl.KeyManager;", "[Ljavax.net.ssl.TrustManager;", "java.security.SecureRandom")

    try {
        sslContextInit.implementation = function(keyManager, trustManager, secureRandom) {
            sslContextInit.call(this, keyManager, trustManagers, secureRandom)
        }
    } catch (err) {}
})