module.exports = async function (data) {
    console.log(data);
    const pattern = `MATCH (p:Product)- ->(a:${data.label}) where a.valor = ${data.valor} with p`;

    return pattern
}

