import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Label,
  Button,
  TextInput,
  Spinner,
  Alert,
  Dropdown,
  Textarea,
  Avatar,
  Navbar,
} from "flowbite-react";
import {
  logInStart,
  logInSuccess,
  logInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from "@/redux/user/userSlice";
// import { app } from "@/firebase.config.js";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import { CircularProgressbar } from "react-circular-progressbar";

export {
  useRef,
  useState,
  useEffect,
  i18n,
  initReactI18next,
  useTranslation,
  cookies,
  useLocation,
  //
  Label,
  Button,
  TextInput,
  Spinner,
  Alert,
  Link,
  useNavigate,
  useDispatch,
  useSelector,
  logInStart,
  logInSuccess,
  logInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  Dropdown,
  Textarea,
  Avatar,
  Navbar,
};
