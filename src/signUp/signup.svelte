<script lang="ts">
    import "./signup.scss"
    let yes = false
</script>

<div class="signUp">
    <h1 class="signUpText">Sign up now to enter the marketplace</h1>
    <p class="help">How can we help you?</p>
    <div class="checkBox">
        <label>
            <input type=checkbox checked={yes}>
            I am looking for funding
        </label>
        <label>
            <input type=checkbox checked={yes}>
            I am looking for investments
        </label>
    </div>
    <div class="signUpForm">
        <label>
            Company Email
            <input type="text" class="email" />
        </label>
        <label>
            Password
            <input type="password" class="email" />
        </label>
    </div>
    <!-- <select>
        <option value={object.value}>{object.name}</option>
    </select> -->
    <button class="linkedIn">Sign up with linked in</button>
    <p class="login">Already have an account? <a href="#">Log in here</a></p>
    <h1 class="agreeTerm">By continuing, you agree to ourTerms of Use and have read and
        understood our Privacy Policy.</h1>
</div>