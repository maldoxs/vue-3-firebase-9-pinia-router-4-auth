//definimos la tienda
import { defineStore } from "pinia";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth"; //metodo q crea un usuario
import { auth } from "../firebaseConfig";
import router from "../router";

//le ponemos un nombre y definimos el store en este caso la tienda
export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null,
        loadingUser: false,
        loadingSesion: false,
    }),

    actions: {
        async registerUser(email, password) {
            this.loadingUser = true;
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                //console.log(user);
                //llenamos el userData con un obj que trae el mail y el uid
                this.userData = { email: user.email, uid: user.uid };
                router.push("/");
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },

        async loginUser(email, password) {
            this.loadingUser = true;
            try {
                const { user } = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                this.userData = { email: user.email, uid: user.uid };
                router.push("/");
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
            }
        },

        async logoutUser() {
            try {
                await signOut(auth);
                this.userData = null; //al cerrar sesion dejamos al usuario con null
                router.push("/login");
            } catch (error) {
                console.log(error);
            }
        },
        currentUser() {
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(
                    auth,
                    (user) => {
                        if (user) {
                            this.userData = {
                                email: user.email,
                                uid: user.uid,
                            };
                        } else {
                            this.userData = null;
                        }
                        resolve(user);
                    },
                    (e) => reject(e)
                );
                unsuscribe();
            });
        },
    },
});
