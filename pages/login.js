// pages/login.js
import { signIn } from "next-auth/react"

export default function LoginPage() {
    return (
        <div style={styles.pageContainer}>
            {/* 顶部灰色背景 + Mentor / Mentee */}
            <header style={styles.header}>
                <div style={styles.headerLeft}>
                    <h2 style={styles.headerOption}>Mentor</h2>
                    <h2 style={styles.headerOption}>Mentee</h2>
                </div>
            </header>

            {/* 斜线分割（灰色背景和白色区域之间） */}
            <div style={styles.diagonalWrapper}>
                <div style={styles.diagonalContent} />
            </div>

            {/* 主体内容区域（登录卡片） */}
            <main style={styles.main}>
                <div style={styles.loginCard}>
                    <h1 style={styles.welcomeTitle}>Welcome back!</h1>
                    <p style={styles.subtitle}>Log In to MentorUp</p>

                    <form style={styles.form}>
                        <label style={styles.label} htmlFor="username">
                            User name/email
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Input your account"
                            style={styles.input}
                        />

                        <label style={styles.label} htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Input your password"
                            style={styles.input}
                        />

                        <div style={styles.extraOptions}>
                            <div>
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    name="rememberMe"
                                    style={{ marginRight: 4 }}
                                />
                                <label htmlFor="rememberMe">Remember me</label>
                            </div>
                            <a href="#" style={styles.forgotPassword}>
                                Forgot Password?
                            </a>
                        </div>

                        <button type="button" style={styles.loginButton}>
                            Login
                        </button>
                    </form>

                    <div style={styles.orContainer}>
                        <span style={styles.orLine}></span>
                        <span style={styles.orText}>Or</span>
                        <span style={styles.orLine}></span>
                    </div>

                    <button
                        type="button"
                        style={styles.googleButton}
                        onClick={() => signIn("google")} // 示例：Google 登录
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google Icon"
                            style={{ width: 20, height: 20, marginRight: 8 }}
                        />
                        Sign in with Google
                    </button>

                    <div style={styles.signupArea}>
                        <span>New User?</span>
                        <a href="#" style={styles.signupLink}>
                            SIGN UP HERE
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

const styles = {
    pageContainer: {
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#f1f1f1",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
    },
    header: {
        backgroundColor: "#dedede",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: 2,
    },
    headerLeft: {
        display: "flex",
        gap: "2rem",
    },
    headerOption: {
        margin: 0,
        cursor: "pointer",
        fontWeight: 500,
    },
    // 斜线分割区域
    diagonalWrapper: {
        position: "relative",
        width: "100%",
        height: "6rem",
        overflow: "hidden",
        backgroundColor: "#dedede",
    },
    diagonalContent: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        transform: "skewY(-4deg)",
        transformOrigin: "top left",
    },
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "-3rem", // 调整与斜线重叠
        paddingBottom: "3rem",
        position: "relative",
        zIndex: 1,
    },
    loginCard: {
        width: "400px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        padding: "2rem",
        textAlign: "center",
    },
    welcomeTitle: {
        margin: 0,
        fontSize: "1.75rem",
        fontWeight: 600,
    },
    subtitle: {
        margin: "0.5rem 0 2rem",
        color: "#555",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "1rem",
    },
    label: {
        textAlign: "left",
        fontSize: "0.9rem",
        fontWeight: 500,
        marginBottom: "0.2rem",
    },
    input: {
        padding: "0.8rem",
        fontSize: "0.9rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
    },
    extraOptions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.85rem",
    },
    forgotPassword: {
        textDecoration: "none",
        color: "#0070f3",
        fontWeight: 500,
    },
    loginButton: {
        marginTop: "1rem",
        padding: "0.8rem",
        fontSize: "1rem",
        fontWeight: 600,
        color: "#fff",
        backgroundColor: "#000",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    orContainer: {
        display: "flex",
        alignItems: "center",
        margin: "1.5rem 0",
        justifyContent: "center",
    },
    orLine: {
        width: "40px",
        height: "1px",
        backgroundColor: "#ccc",
    },
    orText: {
        margin: "0 0.5rem",
        color: "#555",
        fontSize: "0.9rem",
    },
    googleButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "0.8rem",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#fff",
        cursor: "pointer",
    },
    signupArea: {
        marginTop: "1.5rem",
        fontSize: "0.9rem",
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
    },
    signupLink: {
        textDecoration: "none",
        fontWeight: 600,
        color: "#0070f3",
    },
}
