import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
//import * as firebase from "firebase/app";
admin.initializeApp();

export const addMessage = functions.https.onRequest(async (req, res) => {
  const original = req.query.text;
  const writeResult = await admin
    .firestore()
    .collection("messages")
    .add({ original: original });
  res.json({ result: `Message with ID: ${writeResult.id} was added.` });
});

export const makeUppercase = functions.firestore
  .document("/messages/{documentId}")
  .onCreate((snap, context) => {
    // Grab the current value of what was written to Firestore.
    const original = snap.data().original;

    // Access the parameter `{documentId}` with `context.params`
    functions.logger.log("Uppercasing", context.params.documentId, original);

    const uppercase = original.toUpperCase();

    // You must return a Promise when performing asynchronous tasks inside a
    // Functions such as writing to Firestore.
    // Setting an 'uppercase' field in Firestore document returns a Promise.
    return snap.ref.set({ uppercase }, { merge: true });
  });

export const incrementButton = functions.https.onRequest(async (req, res) => {
  const id = req.query.id;
  if (id) {
    const ref = await admin
      .firestore()
      .collection("buttons")
      .doc(id.toString());

    ref.update({
      count: admin.firestore.FieldValue.increment(1),
    });
    res.json("Added");
    return;
  }
  res.json("Failed");
});
