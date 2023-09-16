import * as React from "react";
import Reveal from 'reveal.js';

import '../node_modules/reveal.js/dist/reset.css'
import '../node_modules/reveal.js/dist/reveal.css'
import '../node_modules/reveal.js/dist/theme/black.css'

export function Presentation() {
    React.useEffect(() => {
        const deck = new Reveal({

         })
         deck.initialize();
    },[])

    return (
        <div className="reveal">
            <div className="slides">
                <section>
                    <section data-auto-animate>
                        <pre data-id="foo"><code data-trim data-line-numbers>
                            {`
                            class Main {
                                run() {

                                }
                            }`}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                        <pre data-id="foo"><code data-trim data-line-numbers="3">
                            {`
                            class Main {
                                run() {
                                    const input = prompt('Enter a command: >')
                                }
                            }`}
                        </code></pre>
                    </section>
                </section>
            </div>
        </div>
    );
}