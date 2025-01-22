// public/src/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  // 这里新增
  doc,
  updateDoc,
  arrayUnion
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

// 你的 Firebase 配置信息
const firebaseConfig = {
  apiKey: "AIzaSyAC-syHGrXWQ9jOp9Q2R97565gkPhBMZ94",
  authDomain: "lian-yi-lian.firebaseapp.com",
  projectId: "lian-yi-lian",
  storageBucket: "lian-yi-lian.appspot.com",
  messagingSenderId: "158660735477",
  appId: "1:158660735477:web:79ae88cd964c8ba306f0bc",
  measurementId: "G-F9GMEE5VGX",
};

// 初始化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 统一导出
export {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
  arrayUnion
};
