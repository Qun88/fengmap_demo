defaultMapScale 默认为 null
defaultMapScaleRange 默认为 null
defaultMapScaleLevelRange 默认为 16-23
defaultMapScaleLevel 默认为 20
当设置了 defaultMapScale 属性时，地图按照设置的值显示
当设置了 defaultMapScaleLevel 属性时，地图按照设置的值显示。
当同时设置了 defaultMapScale, defaultMapScaleLevel 时，默认按照 defaultMapScale 的值显示。
当同时设置了 defaultMapScale, defaultMapScaleRange 且冲突时（），defaultMapScaleRange 不生效。

总则，如果用户设置的值和默认值冲突，都按照用户设置的值为准。
如果同时设置了 mapScale 和 mapScaleLevel, 则 mapScale 的优先级高于 mapScaleLevel
