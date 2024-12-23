export const enum Routes {
    HomeScreen =  "Home",
    TransactionScreen = "Transaction",
    LoginScreen = "Login",
    OnboardingScreen  = "Onboarding",
    BudgetScreen = "Budget",
    ProfileScreen = "Profile",
    SettingsScreen = "Settings",
    SetupPinScreen = "SetupPin",
    SignupScreen = "Signup",
    SplashScreen = "Splash",
}

export const screensWithSafeArea = [
    Routes.LoginScreen,
    Routes.SignupScreen,
    Routes.TransactionScreen,
    Routes.BudgetScreen,
    Routes.ProfileScreen,
]