// A variable to hold the image we want to classify and initialize Image Classifier with MobileNet.
const classifier = ml5.imageClassifier("MobileNet");
const img = document.getElementById("myImage");

classifier.classify(img, gotResult);

// Callback function when classification has finished
function gotResult(results) {

  // Display the results
  let label = results[0].label;
  let confidence = (results[0].confidence * 100).toFixed(2);

  document.getElementById("myResult").innerHTML = label + "<br>Confidence: " + confidence + "%";
}