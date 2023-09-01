import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
// import Editor from "@ckeditor/ckeditor5-build-classic";
import Editor from "./ckeditor";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [isEditorShown, setIsEditorShown] = useState(false);
  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then(async (file) => {
            const body = new FormData();
            body.append("upload", file);

            try {
              setIsLoading(true);

              const res1 = await fetch(
                `https://api-qa.naranggo.com/uploadImage`,
                {
                  method: "POST",
                  body,
                }
              );

              const res2 = await res1.json();
              resolve({ default: res2.url });
              setIsLoading(false);
            } catch (error) {
              console.log(error);
              window.location.reload();
              setIsLoading(false);
            }
          });
        });
      },
    };
  };

  const handleClickButton = () => {
    setIsEditorShown(!isEditorShown);
  };

  return (
    <div className="App">
      {isEditorShown ? (
        <CKEditor
          data={value}
          onChange={(_, editor) => setValue(editor.getData().trim())}
          config={{
            extraPlugins: [
              function (editor) {
                editor.plugins.get("FileRepository").createUploadAdapter = (
                  loader
                ) => {
                  return uploadAdapter(loader);
                };
              },
            ],
          }}
          editor={Editor}
        />
      ) : (
        <></>
      )}
      <button onClick={handleClickButton}>Toggle Editor</button>
    </div>
  );
}

export default App;
