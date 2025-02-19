import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PasswordStrengthComponent {
  passwordStrength: string = '';

  checkPasswordStrength(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    const password = ((event.target as HTMLInputElement).value)

    if (password.length === 0) {
      this.passwordStrength = '';
    } else if (password.length < 8) {
      this.passwordStrength = 'short';
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if ((hasLetters && !hasDigits && !hasSymbols) || (!hasLetters && hasDigits && !hasSymbols) || (!hasLetters && !hasDigits && hasSymbols)) {
        this.passwordStrength = 'easy';
      } else if ((hasLetters && hasDigits && !hasSymbols) || (hasLetters && !hasDigits && hasSymbols) || (!hasLetters && hasDigits && hasSymbols)) {
        this.passwordStrength = 'medium';
      } else if (hasLetters && hasDigits && hasSymbols) {
        this.passwordStrength = 'strong';
      }
    }
  }
}
