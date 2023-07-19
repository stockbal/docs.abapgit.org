import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as t}from"./app-7082fc8a.js";const o={},s=t(`<p><strong>Disclaimer</strong>: this functionality is new and may change potentially.</p><h2 id="architecture-comments" tabindex="-1"><a class="header-anchor" href="#architecture-comments" aria-hidden="true">#</a> Architecture comments</h2><p>Kinds of popups:</p><ul><li>&quot;in-page&quot; - a hovering form, blocking the regular content</li><li>&quot;separate page&quot; - a regular page, yet that does not allow any page transitions others that <code>go back</code></li></ul><p>Ideally, a visualization component <strong>should not know that it is a popup</strong> (being agnostic). It is its wrapper that should know and manage the aspects. For example: <code>zcl_abapgit_gui_picklist</code> - a component that renders a list to choose an item from. This very same component can be rendered as a part of the page, as an in-page popup, or as a separate page popup.</p><h3 id="separate-page-popup" tabindex="-1"><a class="header-anchor" href="#separate-page-popup" aria-hidden="true">#</a> Separate-page popup</h3><p>Calling a separate-page popup would be initiated in the event handler and thus would look like this:</p><div class="language-abap line-numbers-mode" data-ext="abap"><pre class="language-abap"><code>  rs_handled<span class="token token-operator punctuation">-</span>state <span class="token operator">=</span> zcl_abapgit_gui<span class="token token-operator punctuation">=&gt;</span>c_event_state<span class="token token-operator punctuation">-</span>new_page<span class="token punctuation">.</span>
  rs_handled<span class="token token-operator punctuation">-</span>page  <span class="token operator">=</span> zcl_abapgit_gui_page_hoc<span class="token token-operator punctuation">=&gt;</span>create<span class="token punctuation">(</span>
    ii_child_component <span class="token operator">=</span> mo_popup_picklist <span class="token eol-comment comment">&quot; Or another component</span>
    iv_show_as_modal   <span class="token operator">=</span> abap_true <span class="token punctuation">)</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Thus wrapping the popup component (e.g. <code>mo_popup_picklist</code> in this example) into the High Order page component. Passing <code>iv_show_as_modal</code> to <code>zcl_abapgit_gui_page_hoc</code> has the following effects on GUI:</p><ul><li>only <code>re_render</code>, <code>go_back</code>, and <code>no_more_act</code> states are accepted from the modal event handler (thus guaranteeing that popup will not forward to any other page rather than its caller)</li><li><code>router</code> is excluded from the event chain (thus also removing the main source of page redirections)</li></ul><h3 id="calling-a-popup-in-page" tabindex="-1"><a class="header-anchor" href="#calling-a-popup-in-page" aria-hidden="true">#</a> Calling a popup in-page</h3><p>The example below focuses on the functionality of <code>zcl_abapgit_gui_picklist</code>, yet it can be any other properly designed component in a popup.</p><ul><li>take into account that re-rendering in-page popup <em>also re-renders the underlying page</em>. If the caller page is potentially large, probably, an in-page popup is a sub-optimal choice.</li><li>the caller page should not interfere with the popup in terms of event and hotkey handling. Thus it must <strong>not</strong> register the handler if an in-page popup is visible.</li></ul><p>Sample implementation can be found for example in <code>zcl_abapgit_gui_page_sett_remo</code>, it includes these treats:</p><ul><li><code>mo_popup_picklist</code> - an instance of a popup (one of - the page can show several, yet all of them are managed by <code>zcl_abapgit_gui_picklist</code>)</li><li>in the event handler: the code that auto-detects if the popup is an in-page or independent</li></ul><div class="language-abap line-numbers-mode" data-ext="abap"><pre class="language-abap"><code>  <span class="token keyword">IF</span> mo_popup_picklist <span class="token keyword">IS</span> <span class="token keyword">BOUND</span><span class="token punctuation">.</span> <span class="token eol-comment comment">&quot; Uniform popup state handling</span>
    <span class="token keyword">IF</span> mo_popup_picklist<span class="token token-operator punctuation">-&gt;</span>is_in_page<span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token operator">=</span> abap_true<span class="token punctuation">.</span>
      rs_handled<span class="token token-operator punctuation">-</span>state <span class="token operator">=</span> zcl_abapgit_gui<span class="token token-operator punctuation">=&gt;</span>c_event_state<span class="token token-operator punctuation">-</span>re_render<span class="token punctuation">.</span>
      <span class="token eol-comment comment">&quot; in-page popup -&gt; rerender the page together with the popup</span>
    <span class="token keyword">ELSE</span><span class="token punctuation">.</span>
      rs_handled<span class="token token-operator punctuation">-</span>state <span class="token operator">=</span> zcl_abapgit_gui<span class="token token-operator punctuation">=&gt;</span>c_event_state<span class="token token-operator punctuation">-</span>new_page<span class="token punctuation">.</span>
      rs_handled<span class="token token-operator punctuation">-</span>page  <span class="token operator">=</span> zcl_abapgit_gui_page_hoc<span class="token token-operator punctuation">=&gt;</span>create<span class="token punctuation">(</span>
        ii_child_component <span class="token operator">=</span> mo_popup_picklist
        iv_show_as_modal   <span class="token operator">=</span> abap_true <span class="token punctuation">)</span><span class="token punctuation">.</span>
      <span class="token eol-comment comment">&quot; separate page popup -&gt; switch to it</span>
    <span class="token keyword">ENDIF</span><span class="token punctuation">.</span>
  <span class="token keyword">ENDIF</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>in <code>render</code>: if an &quot;in-page&quot; popup was initiated - skip own <code>register_handlers</code> (to avoid interference). Otherwise, add the popup to the render result.</li></ul><div class="language-abap line-numbers-mode" data-ext="abap"><pre class="language-abap"><code>    <span class="token keyword">IF</span> mo_popup_picklist <span class="token keyword">IS</span> <span class="token keyword">NOT</span> <span class="token keyword">BOUND</span> <span class="token keyword">OR</span> mo_popup_picklist<span class="token token-operator punctuation">-&gt;</span>is_in_page<span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token operator">=</span> abap_false<span class="token punctuation">.</span>
      register_handlers<span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token keyword">ELSEIF</span> mo_popup_picklist<span class="token token-operator punctuation">-&gt;</span>is_in_page<span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token operator">=</span> abap_true<span class="token punctuation">.</span>
      <span class="token eol-comment comment">&quot; Block usual page events if the popup is an in-page popup</span>
      ri_html<span class="token token-operator punctuation">-&gt;</span>add<span class="token punctuation">(</span> zcl_abapgit_gui_in_page_modal<span class="token token-operator punctuation">=&gt;</span>create<span class="token punctuation">(</span> mo_popup_picklist <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token keyword">ENDIF</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="initiating-the-popup-and-retrieving-the-result" tabindex="-1"><a class="header-anchor" href="#initiating-the-popup-and-retrieving-the-result" aria-hidden="true">#</a> Initiating the popup and retrieving the result</h2><p>Problem: SAP does not allow modal HTML forms, thus initialization and retrieving the result happens asynchronously and independently. It is more the developer&#39;s responsibility to keep this code readable.</p><p>The current &quot;state-of-art&quot; approach suggests (though can potentially be improved): process initiation and result reading <strong>in the same method</strong>, the &quot;mode&quot; should be dictated by parameters (e.g. <code>iv_is_return = abap_true</code>)</p><p>e.g. let&#39;s consider the <code>zcl_abapgit_gui_page_sett_remo-&gt;choose_branch</code>:</p><ul><li>initiation would end up with <code>mo_popup_picklist = ...</code> (create the component), thus marking the presence of the popup for the further code</li><li>the returning part <code>iv_is_return = abap_true</code> is checking if the popup was canceled by user <code>mo_popup_picklist-&gt;was_cancelled( )</code> and retrieves the chosen entry <code>mo_popup_picklist-&gt;get_result_item( ... )</code></li></ul><p>Now, it is important to uniformly initiate the return flow. In <code>zcl_abapgit_gui_page_sett_remo</code> this is done by <code>handle_picklist_state</code> which is called at the very beginning of the <code>render</code>. The method checks if the popup claims that it was fulfilled (confirmed or canceled) and, if yes, calls the appropriate <code>choose_*</code> method based on <code>mo_popup_picklist-&gt;id( )</code>.</p><p>Finally, one more way to escape the popup is by pressing the F3 or ESC - which are handled by GUI, not by the popup component. As a result of this:</p><ol><li>popup does not know that it was canceled</li><li>even further, the <code>back</code> will be applied to the caller page and not to the in-page popup!</li></ol><p>The solution to that is the <code>graceful back</code> procedure. Before going back the GUI send an event <code>go_back</code> to the top-most component (which happens to be the popup). Thus the component has a chance to:</p><ul><li>properly process the request to exit</li><li>send back the <code>re_render</code> or <code>no_more_act</code> states <ul><li>the <code>re_render</code> will result in the re-rendering of the parent (caller) page, yet with the popup in canceled/fulfilled state</li><li>the <code>no_more_act</code> gives a possibility to cancel the <code>go_back</code> action (e.g. to prevent exiting the popup when data was not saved)</li></ul></li></ul>`,28),p=[s];function i(c,l){return a(),n("div",null,p)}const d=e(o,[["render",i],["__file","html-popups.html.vue"]]);export{d as default};
