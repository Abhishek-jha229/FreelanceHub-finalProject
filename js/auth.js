/* ============================================
   AUTH.JS — Login & Register Scripts
   ============================================ */

// ===== STATE =====
let selectedAccountType = "client";
let isLoginPage = window.location.pathname.includes("login");

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  if (isLoginPage) {
    initLoginPage();
  } else {
    initRegisterPage();
  }
});

/* ============================================
   LOGIN PAGE
   ============================================ */
function initLoginPage() {
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");

  if (emailInput) {
    emailInput.addEventListener("blur", () => {
      validateEmail(emailInput, "emailField", "emailError");
    });
    emailInput.addEventListener("input", () => {
      clearFieldError("emailField", "emailError");
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener("blur", () => {
      validateRequired(
        passwordInput,
        "passwordField",
        "passwordError",
        "Password is required",
      );
    });
    passwordInput.addEventListener("input", () => {
      clearFieldError("passwordField", "passwordError");
    });
  }
}

// ===== HANDLE LOGIN =====
async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");

  // Validate
  let isValid = true;

  if (!validateEmail(email, "emailField", "emailError")) {
    isValid = false;
  }

  if (
    !validateRequired(
      password,
      "passwordField",
      "passwordError",
      "Password is required",
    )
  ) {
    isValid = false;
  }

  if (!isValid) return;

  // Show loader
  setButtonLoading("loginBtn", true);

  // Simulate API call
  await delay(2000);

  // Demo credentials check
  if (
    email.value === "demo@freelancehub.com" &&
    password.value === "Demo@1234"
  ) {
    setButtonLoading("loginBtn", false);
    showSuccessState("login");
  } else if (email.value && password.value) {
    // Accept any credentials for demo
    setButtonLoading("loginBtn", false);
    showSuccessState("login");
  } else {
    setButtonLoading("loginBtn", false);
    showFieldError(
      "passwordField",
      "passwordError",
      "Invalid email or password",
    );
    showToast(
      "Invalid credentials. Try demo@freelancehub.com / Demo@1234",
      "error",
    );
  }
}

/* ============================================
   REGISTER PAGE
   ============================================ */
function initRegisterPage() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const regEmail = document.getElementById("regEmail");
  const username = document.getElementById("username");
  const regPassword = document.getElementById("regPassword");
  const confirmPassword = document.getElementById("confirmPassword");

  // Real-time validation
  if (firstName) {
    firstName.addEventListener("blur", () =>
      validateRequired(
        firstName,
        "firstNameField",
        "firstNameError",
        "First name is required",
      ),
    );
    firstName.addEventListener("input", () =>
      clearFieldError("firstNameField", "firstNameError"),
    );
  }

  if (lastName) {
    lastName.addEventListener("blur", () =>
      validateRequired(
        lastName,
        "lastNameField",
        "lastNameError",
        "Last name is required",
      ),
    );
    lastName.addEventListener("input", () =>
      clearFieldError("lastNameField", "lastNameError"),
    );
  }

  if (regEmail) {
    regEmail.addEventListener("blur", () =>
      validateEmail(regEmail, "regEmailField", "regEmailError"),
    );
    regEmail.addEventListener("input", () =>
      clearFieldError("regEmailField", "regEmailError"),
    );
  }

  if (username) {
    username.addEventListener("blur", () => validateUsername(username));
    username.addEventListener("input", () =>
      clearFieldError("usernameField", "usernameError"),
    );
  }

  if (regPassword) {
    regPassword.addEventListener("input", () => {
      checkPasswordStrength(regPassword.value);
      clearFieldError("regPasswordField", "regPasswordError");
    });

    regPassword.addEventListener("focus", () => {
      showEl("passwordStrength");
      showEl("passwordReqs");
    });
  }

  if (confirmPassword) {
    confirmPassword.addEventListener("blur", () => validateConfirmPassword());
    confirmPassword.addEventListener("input", () =>
      clearFieldError("confirmPasswordField", "confirmPasswordError"),
    );
  }
}

// ===== SELECT ACCOUNT TYPE =====
function selectAccountType(type) {
  selectedAccountType = type;

  const clientBtn = document.getElementById("clientTypeBtn");
  const freelancerBtn = document.getElementById("freelancerTypeBtn");
  const freelancerFields = document.getElementById("freelancerFields");

  if (type === "client") {
    clientBtn.classList.add("active");
    freelancerBtn.classList.remove("active");
    if (freelancerFields) freelancerFields.style.display = "none";
  } else {
    freelancerBtn.classList.add("active");
    clientBtn.classList.remove("active");
    if (freelancerFields) {
      freelancerFields.style.display = "block";
      freelancerFields.style.animation = "fadeInTab 0.3s ease";
    }
  }
}

// ===== HANDLE REGISTER =====
async function handleRegister(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const regEmail = document.getElementById("regEmail");
  const username = document.getElementById("username");
  const regPassword = document.getElementById("regPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const agreeTerms = document.getElementById("agreeTerms");

  let isValid = true;

  // Validate all fields
  if (
    !validateRequired(
      firstName,
      "firstNameField",
      "firstNameError",
      "First name is required",
    )
  ) {
    isValid = false;
  }

  if (
    !validateRequired(
      lastName,
      "lastNameField",
      "lastNameError",
      "Last name is required",
    )
  ) {
    isValid = false;
  }

  if (!validateEmail(regEmail, "regEmailField", "regEmailError")) {
    isValid = false;
  }

  if (!validateUsername(username)) {
    isValid = false;
  }

  if (!validatePassword(regPassword)) {
    isValid = false;
  }

  if (!validateConfirmPassword()) {
    isValid = false;
  }

  if (!agreeTerms.checked) {
    showFieldError("termsField", "termsError", "You must agree to the terms");
    isValid = false;
  }

  if (!isValid) {
    showToast("Please fix the errors above", "error");
    // Scroll to first error
    const firstError = document.querySelector(".form-field.invalid");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  // Show loader
  setButtonLoading("registerBtn", true);

  // Simulate API call
  await delay(2200);

  setButtonLoading("registerBtn", false);
  showSuccessState("register");
}

/* ============================================
   VALIDATION FUNCTIONS
   ============================================ */

// Validate email
function validateEmail(input, fieldId, errorId) {
  const value = input.value.trim();
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    showFieldError(fieldId, errorId, "Email address is required");
    return false;
  }

  if (!emailRx.test(value)) {
    showFieldError(fieldId, errorId, "Please enter a valid email address");
    return false;
  }

  setFieldValid(fieldId, errorId);
  return true;
}

// Validate required field
function validateRequired(input, fieldId, errorId, message) {
  const value = input.value.trim();

  if (!value) {
    showFieldError(fieldId, errorId, message);
    return false;
  }

  setFieldValid(fieldId, errorId);
  return true;
}

// Validate username
function validateUsername(input) {
  const value = input ? input.value.trim() : "";
  const usernameRx = /^[a-zA-Z0-9_]{3,20}$/;

  if (!value) {
    showFieldError("usernameField", "usernameError", "Username is required");
    return false;
  }

  if (!usernameRx.test(value)) {
    showFieldError(
      "usernameField",
      "usernameError",
      "Username must be 3-20 characters (letters, numbers, underscore)",
    );
    return false;
  }

  setFieldValid("usernameField", "usernameError");
  return true;
}

// Validate password
function validatePassword(input) {
  const value = input ? input.value : "";

  if (!value) {
    showFieldError(
      "regPasswordField",
      "regPasswordError",
      "Password is required",
    );
    return false;
  }

  if (value.length < 8) {
    showFieldError(
      "regPasswordField",
      "regPasswordError",
      "Password must be at least 8 characters",
    );
    return false;
  }

  if (!/[A-Z]/.test(value)) {
    showFieldError(
      "regPasswordField",
      "regPasswordError",
      "Password must contain an uppercase letter",
    );
    return false;
  }

  if (!/[0-9]/.test(value)) {
    showFieldError(
      "regPasswordField",
      "regPasswordError",
      "Password must contain a number",
    );
    return false;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    showFieldError(
      "regPasswordField",
      "regPasswordError",
      "Password must contain a special character",
    );
    return false;
  }

  setFieldValid("regPasswordField", "regPasswordError");
  return true;
}

// Validate confirm password
function validateConfirmPassword() {
  const password = document.getElementById("regPassword");
  const confirm = document.getElementById("confirmPassword");

  if (!confirm || !confirm.value) {
    showFieldError(
      "confirmPasswordField",
      "confirmPasswordError",
      "Please confirm your password",
    );
    return false;
  }

  if (password && password.value !== confirm.value) {
    showFieldError(
      "confirmPasswordField",
      "confirmPasswordError",
      "Passwords do not match",
    );
    return false;
  }

  setFieldValid("confirmPasswordField", "confirmPasswordError");
  return true;
}

/* ============================================
   PASSWORD STRENGTH CHECKER
   ============================================ */
function checkPasswordStrength(password) {
  // Show strength UI
  const strengthEl = document.getElementById("passwordStrength");
  const reqsEl = document.getElementById("passwordReqs");

  if (strengthEl) strengthEl.classList.add("show");
  if (reqsEl) reqsEl.classList.add("show");

  if (!password) return;

  // Check requirements
  const reqs = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  // Update requirement items
  updateReqItem("req-length", reqs.length);
  updateReqItem("req-upper", reqs.upper);
  updateReqItem("req-number", reqs.number);
  updateReqItem("req-special", reqs.special);

  // Calculate strength
  const score = Object.values(reqs).filter(Boolean).length;

  // Update strength bars
  const bars = ["sb1", "sb2", "sb3", "sb4"];
  const label = document.getElementById("strengthLabel");

  bars.forEach((id, i) => {
    const bar = document.getElementById(id);
    if (!bar) return;
    bar.className = "strength-bar";
    if (i < score) {
      if (score === 1) bar.classList.add("weak");
      else if (score === 2) bar.classList.add("fair");
      else if (score === 3) bar.classList.add("good");
      else bar.classList.add("strong");
    }
  });

  const labels = {
    0: "Too weak",
    1: "Weak",
    2: "Fair",
    3: "Good",
    4: "Strong",
  };
  const colors = {
    0: "#ef4444",
    1: "#ef4444",
    2: "#f97316",
    3: "#eab308",
    4: "#22c55e",
  };

  if (label) {
    label.textContent = labels[score] || "Enter password";
    label.style.color = colors[score] || "var(--gray-400)";
  }
}

function updateReqItem(id, isMet) {
  const el = document.getElementById(id);
  if (!el) return;

  if (isMet) {
    el.classList.add("met");
    el.querySelector("i").className = "fa fa-circle-check";
  } else {
    el.classList.remove("met");
    el.querySelector("i").className = "fa fa-circle-xmark";
  }
}

/* ============================================
   UI HELPERS
   ============================================ */

// Show field error
function showFieldError(fieldId, errorId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);

  if (field) {
    field.classList.add("invalid");
    field.classList.remove("valid");
  }

  if (error) {
    error.textContent = message;
    error.classList.add("show");
  }
}

// Set field valid
function setFieldValid(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);

  if (field) {
    field.classList.add("valid");
    field.classList.remove("invalid");
  }

  if (error) {
    error.textContent = "";
    error.classList.remove("show");
  }
}

// Clear field error
function clearFieldError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);

  if (field) field.classList.remove("invalid");

  if (error) {
    error.textContent = "";
    error.classList.remove("show");
  }
}

// Show/hide element
function showEl(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("show");
}

// Button loading state
function setButtonLoading(btnId, isLoading) {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  const text = btn.querySelector(".btn-text");
  const loader = btn.querySelector(".btn-loader");

  btn.disabled = isLoading;
  text.style.display = isLoading ? "none" : "inline-flex";
  loader.style.display = isLoading ? "inline-flex" : "none";
}

// Show success state
function showSuccessState(type) {
  const formWrap = document.querySelector(".auth-form-wrap");
  if (!formWrap) return;

  const isLogin = type === "login";

  formWrap.innerHTML = `
    <div class="auth-success">
      <div class="success-icon">
        ${isLogin ? "👋" : "🎉"}
      </div>
      <h2>${isLogin ? "Welcome Back!" : "Account Created!"}</h2>
      <p>
        ${
          isLogin
            ? "You have successfully signed in to your FreelanceHub account."
            : "Your account has been created successfully. Welcome to FreelanceHub!"
        }
      </p>
      <div style="display:flex; flex-direction:column; gap:12px; max-width:280px; margin:0 auto;">
        <a href="index.html" class="btn btn-primary btn-lg" style="justify-content:center;">
          <i class="fa fa-home"></i>
          Go to Homepage
        </a>
        <a href="browse.html" class="btn btn-outline btn-lg" style="justify-content:center;">
          <i class="fa fa-search"></i>
          Browse Services
        </a>
      </div>
    </div>
  `;

  showToast(
    isLogin
      ? "🎉 Welcome back! Signed in successfully!"
      : "🚀 Account created! Welcome to FreelanceHub!",
    "success",
  );
}

/* ============================================
   PASSWORD TOGGLE
   ============================================ */
function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  const icon = btn.querySelector("i");
  if (icon) {
    icon.className = isPassword ? "fa fa-eye-slash" : "fa fa-eye";
  }
}

/* ============================================
   SOCIAL LOGIN
   ============================================ */
function socialLogin(provider) {
  showToast(`Connecting to ${provider}...`, "info");
  setTimeout(() => {
    showToast(`${provider} login is not connected in demo mode`, "warning");
  }, 1500);
}

/* ============================================
   FORGOT PASSWORD MODAL
   ============================================ */
function showForgotPassword() {
  const modal = document.getElementById("forgotModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    const input = document.getElementById("forgotEmail");
    if (input) {
      const loginEmail = document.getElementById("loginEmail");
      if (loginEmail && loginEmail.value) {
        input.value = loginEmail.value;
      }
      setTimeout(() => input.focus(), 300);
    }
  }
}

function closeForgotModal() {
  const modal = document.getElementById("forgotModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

async function sendResetLink() {
  const emailInput = document.getElementById("forgotEmail");
  const errorEl = document.getElementById("forgotEmailError");

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailInput || !emailInput.value.trim()) {
    if (errorEl) {
      errorEl.textContent = "Please enter your email address";
      errorEl.classList.add("show");
    }
    return;
  }

  if (!emailRx.test(emailInput.value.trim())) {
    if (errorEl) {
      errorEl.textContent = "Please enter a valid email address";
      errorEl.classList.add("show");
    }
    return;
  }

  if (errorEl) {
    errorEl.textContent = "";
    errorEl.classList.remove("show");
  }

  // Simulate sending
  const modalBody = document.querySelector("#forgotModal .modal-body");
  const modalFooter = document.querySelector("#forgotModal .modal-footer");

  if (modalBody) {
    modalBody.innerHTML = `
      <div style="text-align:center; padding: 20px 0;">
        <div style="font-size:48px; margin-bottom:16px;">✉️</div>
        <h4 style="font-size:17px; font-weight:700; color:var(--gray-800); margin-bottom:8px;">
          Check Your Email!
        </h4>
        <p style="font-size:14px; color:var(--gray-500); line-height:1.7;">
          We've sent a password reset link to<br/>
          <strong style="color:var(--gray-800);">${emailInput.value}</strong>
        </p>
      </div>
    `;
  }

  if (modalFooter) {
    modalFooter.innerHTML = `
      <button class="btn btn-primary" style="flex:1;" onclick="closeForgotModal()">
        <i class="fa fa-check"></i> Done
      </button>
    `;
  }

  showToast("Reset link sent! Check your inbox 📧", "success");
}

/* ============================================
   UTILITY
   ============================================ */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Close modal on overlay click
document.addEventListener("click", (e) => {
  if (e.target.id === "forgotModal") {
    closeForgotModal();
  }
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeForgotModal();
});
