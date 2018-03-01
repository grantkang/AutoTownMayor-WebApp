package com.autotownmayor.server.converter;

import com.autotownmayor.server.response.SalesItemResponse;

import java.math.BigDecimal;
import java.util.function.Function;

// TODO: Find a better alternative possibly using Spring repository custom queries
public class SalesItemResponsePriceRemover implements Function<SalesItemResponse,SalesItemResponse> {
    @Override
    public SalesItemResponse apply(SalesItemResponse source) {
        SalesItemResponse salesItemResponse = source;
        salesItemResponse.setPrice(null);

        return salesItemResponse;
    }
}
