    <script>//<![CDATA[
        $("[title]").mouseover(function () {
            $this_tool_tip_elm = $(this);
            tool_tip_title = $this_tool_tip_elm.attr("title");
            $this_tool_tip_elm.attr("data-Ma3akTech_title", tool_tip_title);
            $this_tool_tip_elm.removeAttr("title");
            $("body").prepend(`<div id="Ma3akTech_tooltip">${tool_tip_title}</div>`);
            $this_tool_tip_elm.mousemove(function (event) {
                $("#Ma3akTech_tooltip").css("top", event.clientY + 10).css("left", event.clientX);
            });
            $this_tool_tip_elm.mouseout(function () {
                $this_tool_tip_elm.attr("title", $(this).attr("data-Ma3akTech_title"));
                $this_tool_tip_elm.removeAttr("data-Ma3akTech_title");
                $("#Ma3akTech_tooltip").remove();
            });
        });
    //]]></script>
