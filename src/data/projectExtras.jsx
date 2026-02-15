// Per-project custom JSX content, mapped by slug.
// This keeps the data file (projects.js) clean while supporting rich detail content.
export const projectExtras = {
  'ur5-reseach': (
    <>
      <p className="text-sm text-gray-600 mb-3 font-medium">
        A 4-step pipeline from simulation to detection:
      </p>
      <ul className="text-sm text-gray-600 list-disc list-inside mb-4 space-y-1">
        <li>Built 3D models of 11 surgical instruments and imported them into a Gazebo simulation with the UR5 arm</li>
        <li>Captured synthetic training images from the simulation environment</li>
        <li>Annotated the dataset with bounding boxes using Roboflow across all 11 tool classes</li>
        <li>Trained a YOLOv5 object detection model — achieving <strong>95.8% mAP@0.5</strong> across all classes</li>
      </ul>
      <p className="text-sm text-gray-500 mb-4 italic">
        Most instrument classes scored 0.99+ precision-recall, with the model confidently distinguishing between visually similar tools like Iris Scissors and Kelly Scissors.
      </p>
      <p className="text-sm text-gray-600 mb-3 font-medium">Tools detected:</p>
      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        Allis Tissue Forceps · Dressing Tweezer · Episiotomy Scissors · Iris Scissors · Kelly Scissors · Mayo-Hegar Forceps · Mosquito Forceps · Scalpel B10 · Scalpel B11 · Splinter Tweezer · Weitlaner Retractor
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Conducted under the Department of Education Summer 2024 research program at UHD.
      </p>
    </>
  ),

  medlens: (
    <>
      <p className="text-sm text-gray-600 mb-3 font-medium">Key features:</p>
      <ul className="text-sm text-gray-600 list-disc list-inside mb-4 space-y-1">
        <li>Upload PDFs or images of medical reports for instant AI analysis.</li>
        <li>Translates medical jargon into plain language using Google Gemini 2.0 Flash.</li>
        <li>Multilingual support — Over 20 Languages.</li>
        <li>Interactive Q&A lets patients ask follow-up questions in their preferred language.</li>
        <li>Text-to-speech via ElevenLabs for audio explanations with natural voice synthesis.</li>
        <li>Privacy-first — OCR processing handled locally with Tesseract and pdfplumber.</li>
      </ul>
      <p className="text-sm text-gray-500 mb-4 italic">
        Built to break down the barriers of medical literacy, language, and accessibility — so patients can understand their own health.
      </p>
    </>
  ),

  // Add extras for other projects:
  // 'project-slug': (
  //   <>
  //     <p>Custom content here...</p>
  //   </>
  // ),
}
