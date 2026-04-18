export default function Example() {
  return (
    <div>
      <fieldset>
        <label htmlFor="theme-select" className="sr-only">
          Choose a theme:
        </label>
        <select
          id="theme-select"
          className="font-sans pr-9 text-neutral-500 select select-bordered select-primary select-xs capitalize"
        >
          <option value="" disabled={true}>
            Select a theme
          </option>
          <option value="acid" className="capitalize">
            acid
          </option>
          <option value="aqua" className="capitalize">
            aqua
          </option>
          <option value="autumn" className="capitalize">
            autumn
          </option>
          <option value="black" className="capitalize">
            black
          </option>
          <option value="bumblebee" className="capitalize">
            bumblebee
          </option>
          <option value="business" className="capitalize">
            business
          </option>
          <option value="cmyk" className="capitalize">
            cmyk
          </option>
          <option value="coffee" className="capitalize">
            coffee
          </option>
          <option value="corporate" className="capitalize">
            corporate
          </option>
          <option value="cupcake" className="capitalize">
            cupcake
          </option>
          <option value="cyberpunk" className="capitalize">
            cyberpunk
          </option>
          <option value="dark" className="capitalize">
            dark
          </option>
          <option value="dim" className="capitalize">
            dim
          </option>
          <option value="dracula" className="capitalize">
            dracula
          </option>
          <option value="emerald" className="capitalize">
            emerald
          </option>
          <option value="fantasy" className="capitalize">
            fantasy
          </option>
          <option value="forest" className="capitalize">
            forest
          </option>
          <option value="garden" className="capitalize">
            garden
          </option>
          <option value="halloween" className="capitalize">
            halloween
          </option>
          <option value="lemonade" className="capitalize">
            lemonade
          </option>
          <option value="light" className="capitalize">
            light
          </option>
          <option value="lofi" className="capitalize">
            lofi
          </option>
          <option value="luxury" className="capitalize">
            luxury
          </option>
          <option value="night" className="capitalize">
            night
          </option>
          <option value="nord" className="capitalize">
            nord
          </option>
          <option value="pastel" className="capitalize">
            pastel
          </option>
          <option value="retro" className="capitalize">
            retro
          </option>
          <option value="sunset" className="capitalize">
            sunset
          </option>
          <option value="synthwave" className="capitalize">
            synthwave
          </option>
          <option value="valentine" className="capitalize">
            valentine
          </option>
          <option value="winter" className="capitalize">
            winter
          </option>
          <option value="wireframe" className="capitalize">
            wireframe
          </option>
        </select>
      </fieldset>
    </div>
  );
}
