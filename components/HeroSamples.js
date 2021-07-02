export const Node = (
  <pre className="p-4 overflow-scroll font-mono mb-4" style="background-color: #292D3E">
    <code><span style="display:block"></span>
<span style="display:block"><span style="color: #676E95; font-style: italic">// define interactionSignal handler in your favorite framework</span></span>
<span style="display:block"><span style="color: #89DDFF; font-style: italic">export</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">async</span><span style="color: #A6ACCD"> </span><span style="color: #C792EA">function</span><span style="color: #A6ACCD"> </span><span style="color: #82AAFF">mainWorkflow</span><span style="color: #89DDFF">(</span><span style="color: #A6ACCD">userId</span><span style="color: #89DDFF">)</span><span style="color: #A6ACCD"> </span><span style="color: #89DDFF">{"{"}</span></span>
<span style="display:block"><span style="color: #F07178">  </span><span style="color: #C792EA">const</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">userInteracted</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #FFCB6B">Promise</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">race</span><span style="color: #F07178">([</span></span>
<span style="display:block"><span style="color: #F07178">{"    "}</span><span style="color: #A6ACCD">interactionSignal</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #676E95; font-style: italic">// receive signals from users!</span></span>
<span style="display:block"><span style="color: #F07178">{"    "}</span><span style="color: #82AAFF">sleep</span><span style="color: #F07178">(</span><span style="color: #F78C6C">30</span><span style="color: #F07178"> </span><span style="color: #89DDFF">*</span><span style="color: #F07178"> </span><span style="color: #A6ACCD">DAY</span><span style="color: #F07178">)</span><span style="color: #89DDFF">,</span><span style="color: #F07178"> </span><span style="color: #676E95; font-style: italic">// sleep for 30 days!</span></span>
<span style="display:block"><span style="color: #F07178">  ])</span><span style="color: #89DDFF">;</span></span>
<span style="display:block"><span style="color: #F07178">  </span><span style="color: #89DDFF; font-style: italic">if</span><span style="color: #F07178"> (</span><span style="color: #89DDFF">!</span><span style="color: #A6ACCD">userInteracted</span><span style="color: #F07178">) </span><span style="color: #89DDFF">{"{"}</span></span>
<span style="display:block"><span style="color: #F07178">{"    "}</span><span style="color: #89DDFF; font-style: italic">await</span><span style="color: #F07178"> </span><span style="color: #82AAFF">sendEmailActivity</span><span style="color: #F07178">(</span><span style="color: #A6ACCD">userId</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span><span style="color: #F07178"> </span><span style="color: #676E95; font-style: italic">// timeouts + retries!</span></span>
<span style="display:block"><span style="color: #F07178">  </span><span style="color: #89DDFF">{"}"}</span></span>
<span style="display:block"><span style="color: #89DDFF">{"}"}</span></span>
<span style="display:block"><span style="color: #676E95; font-style: italic">// Scale to Millions + Write Tests + Encrypt Data + Migrate Versions + ... </span></span></code></pre>
);

export const Go = (
  <pre className="p-4 overflow-scroll" style="background-color: #292D3E">
    <code>GOLANG CODE HERE</code>
  </pre>
);
export const Java = (
  <pre className="p-4 overflow-scroll" style="background-color: #292D3E">
    <code>JAVA CODE HERE</code>
  </pre>
);
export const PHP = (
  <pre className="p-4 overflow-scroll" style="background-color: #292D3E">
    <code>PHP CODE HERE</code>
  </pre>
);

// prettier-ignore-end