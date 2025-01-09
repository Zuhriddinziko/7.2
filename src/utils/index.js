export function getFirebaseErrorMessage(errorCode) {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Invalid email address.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    case "auth/email-already-in-use":
      return "Email address is already in use.";
    case "auth/user-not-found":
      return "User not found.";
    case "auth/wrong-password":
      return "Incorrect password.";
    case "auth/too-many-requests":
      return "Too many requests. Please try again later.";
    case "auth/operation-not-allowed":
      return "This operation is not allowed. Please contact support.";
    // Add more error codes and their corresponding messages here
    default:
      return "An unexpected error occurred.";
  }
}

// utils.js
export function validateSignupOrLoginData(actionData, isSignup = false) {
  if (!actionData) {
    return { valid: false, errors: { general: "No data provided." } };
  }

  const {
    displayName,
    email,
    password,
    confirmPassword,
    description,
    essimen,
    projectType,
    name,
  } = actionData;
  const errors = {};

  // Signup-specific validation
  if (isSignup) {
    if (!displayName || displayName.trim().length < 3) {
      errors.displayName = "Display name must be at least 3 characters long.";
    }
    if (!name || name.trim().length < 3) {
      errors.name = "Display name must be at least 3 characters long.";
    }
    if (!description || description.trim().length < 3) {
      errors.description = "Display name must be at least 3 characters long.";
    }
    if (!essimen || essimen.trim().length < 3) {
      errors.essimen = "Display name must be at least 3 characters long.";
    }
    if (!projectType || projectType.trim().length < 3) {
      errors.projectType = "Display name must be at least 3 characters long.";
    }

    if (!confirmPassword || password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Invalid email address.";
  }

  // Password validation
  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  if (Object.keys(errors).length === 0) {
    return { valid: true };
  }

  return { valid: false, errors };
}

export function validateProjectData(projectData) {
  if (!projectData) {
    return {
      valid: false,
      errors: { general: "Please provide project data." },
    };
  }

  const { name, dueDate, details, category, assignedUsersList } = projectData;
  const errors = {};

  // Name validation
  if (!name || name.trim().length < 3) {
    errors.name = "Project name should be at least 3 characters long.";
  }

  // Due date validation
  if (!dueDate || isNaN(dueDate.seconds) || isNaN(dueDate.nanoseconds)) {
    errors.dueDate = "Please provide a valid due date.";
  }

  // Details validation
  if (!details || details.trim().length < 10) {
    errors.details = "Project details should be at least 10 characters long.";
  }

  // Category validation
  if (!category || category.value < 3) {
    errors.category = "Category should be at least 3 characters long.";
  }

  // AssignedUsersList validation
  if (!Array.isArray(assignedUsersList) || assignedUsersList.length === 0) {
    errors.assignedUsersList =
      "Please assign at least one user to the project.";
  }

  if (Object.keys(errors).length === 0) {
    return { valid: true };
  }

  return { valid: false, errors };
}

export function formatCommentTime(commentTime) {
  const date = new Date(
    commentTime.seconds * 1000 + Math.floor(commentTime.nanoseconds / 1e6)
  );
  const now = new Date();

  const timeDiff = now - date;
  const oneDay = 24 * 60 * 60 * 1000;

  if (timeDiff < oneDay && now.getDate() === date.getDate()) {
    return {
      day: "Today",
      hour: `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`,
    };
  }

  if (timeDiff < 2 * oneDay && now.getDate() - date.getDate() === 1) {
    return {
      day: "Yesterday",
      hour: `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`,
    };
  }

  return {
    day: `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`,
    hour: `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`,
  };
}
