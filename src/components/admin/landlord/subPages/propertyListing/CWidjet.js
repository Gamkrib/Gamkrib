import { createContext, useEffect, useState } from "react";
import { theme } from "../../../../../theme";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, setPublicId }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Check if the script is already loaded
        if (!loaded) {
            const uwScript = document.getElementById("uw");
            if (!uwScript) {
                // If not loaded, create and load the script
                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw");
                script.src = "https://upload-widget.cloudinary.com/global/all.js";
                script.addEventListener("load", () => setLoaded(true));
                document.body.appendChild(script);
            } else {
                // If already loaded, update the state
                setLoaded(true);
            }
        }
    }, [loaded]);

    let imgStrings = []
    const initializeCloudinaryWidget = () => {
        if (loaded) {
            var myWidget = window.cloudinary.createUploadWidget(
                uwConfig,
                (error, result) => {
                    if (!error && result && result.event === "success") {
                        console.log("Done! Here is the image info: ",);
                        imgStrings.push(result.info?.url)
                        setPublicId(result.info.public_id);
                    }
                    const s = JSON.stringify(imgStrings)
                    localStorage.setItem('propStrings', s)
                }
            );

            document.getElementById("upload_widget").addEventListener(
                "click",
                function () {
                    myWidget.open();
                },
                false
            );
        }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <button
                style={{ backgroundColor: theme.colors.brand.primary }}
                id="upload_widget"
                className="cloudinary-button"
                onClick={initializeCloudinaryWidget}
            >
                Upload Property Images
            </button>
        </CloudinaryScriptContext.Provider>
    );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
