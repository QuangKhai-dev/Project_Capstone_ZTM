import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1HU0mUlk-Y18rSvDL0llR6k8OdnXJKTI",
  authDomain: "crown-ztm-db-159e2.firebaseapp.com",
  projectId: "crown-ztm-db-159e2",
  storageBucket: "crown-ztm-db-159e2.appspot.com",
  messagingSenderId: "16055243510",
  appId: "1:16055243510:web:1dc9819183ecb4ae8652d7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// Đăng nhập bằng google popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//Chuyển hướng đến trang đăng nhập bằng google
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//Kết nối đến kho db firebase
export const db = getFirestore();

export const addColectionAndDocument = async (collectionKey, objectsToAdd) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  // đọc object và tạo title trên db
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  // cam kết tạo collection và tạo document

  await batch.commit();
  // console.log("done");
};

export const getCategoriesAndDocument = async () => {
  // lấy collection từ db về
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  // chạy reduce trả về đối tượng - chưa hiểu lắm thg reduce này tìm hiểu thêm
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;

    return acc;
  }, {});

  return categoryMap;
};

// Tạo hàm check xem người đăng nhập đã có trong db chưa, nếu chưa có thì tạo
export const createUserDocumentFormAuth = async (
  userAuth,
  additionalInfomation = {}
) => {
  // Nếu không nhận được tham số ngưng hàm
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfomation,
      });
    } catch (err) {
      console.log("error when creating the user", err.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // Nếu không nhận được tham số ngưng hàm
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  // Nếu không nhận được tham số ngưng hàm
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUsers = () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
