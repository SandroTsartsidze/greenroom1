<script lang="ts">
    export const conf:[];

    const validate = (el, validate) => {
        if(!validate.regex.test(el.target.value)) {
            el.target.nextElementSibling.style.display = "block"
        }
    }


</script>

{#each conf as section}
    <h1 class="title">{ section.title }</h1>    
    <p class="desc">{ section.description }</p>

    <!-- fields -->
    {#each section.fields as field}
        <h2>{ field.title }</h2>
        <p>{ field.description }</p>

        {#if field.type == "text"}
            <input type="text" placeholder={field.placeholder} on:keyup={e => validate(e, field.validation)}/>
            <p class="validate-error">{ field.validate.message }</p>
        {:else if field.type == "file"}
            <input type="file"/>
            <div class="preview">
                <img src={ field.message } />
            </div>
        {:else if field.type == "img"}
        {:else if field.type == "textarea"}
        {:else if field.type == "date"}
        {:else if field.type == "number"}
        {:else if field.type == "toggle"}
        {:else if field.type == "checkbox"}
        {:else if field.type == "select"}
            <select>
                {#each field.options as option}
                    <option value={option.value}>{option.name}</option>
                {/each}
            </select>
        {/if}
    {/each}

{/each}

<style>
    .validate-error {
        display: none;
    }
</style>